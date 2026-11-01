'use strict'

const feedbackTypes = ['功能建议', '问题反馈', '其他']

exports.main = async (event) => {
  if (event === null || typeof event !== 'object') {
    throw new Error('反馈数据格式错误')
  }

  const type = event.type
  const content = event.content
  const contact = event.contact === undefined ? '' : event.contact
  const images = event.images === undefined ? [] : event.images

  if (typeof type !== 'string' || feedbackTypes.indexOf(type) < 0) {
    throw new Error('反馈类型无效')
  }
  if (typeof content !== 'string' || content.trim().length === 0 || content.trim().length > 500) {
    throw new Error('反馈内容需为 1 至 500 个字符')
  }
  if (typeof contact !== 'string' || contact.length > 100) {
    throw new Error('联系方式不能超过 100 个字符')
  }
  if (!Array.isArray(images) || images.length > 3 || images.some((fileID) => {
    return typeof fileID !== 'string' || fileID.length === 0 || fileID.length > 1024
  })) {
    throw new Error('反馈图片最多上传 3 张')
  }

  const result = await uniCloud.database().collection('feedback').add({
    type,
    content: content.trim(),
    contact: contact.trim(),
    images,
    create_time: new Date()
  })

  return {
    id: result.id
  }
}
