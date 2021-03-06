import axios from 'axios'
import { ImageProp, ResourceProp } from '../interfaces/trampos'

export async function search(options: any = {}) {
  const params = {
    ...options,
  }
  if (options.nextCursor) {
    params.next_cursor = options.nextCursor
    delete params.nextCursor
  }
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')
  const results = axios.get(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString('base64')}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  )
  const images = (await results).data
  return images
}

export function mapImageResources(resources: ResourceProp[]) {
  const images: ImageProp[] = []
  resources?.map((resource) => {
    const { width, height } = resource
    images.push({
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    })
  })
  return images
}

export async function getFolders() {
  const results = axios.get(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/folders`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
        ).toString('base64')}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  )
  const folders = (await results).data
  return folders
}
