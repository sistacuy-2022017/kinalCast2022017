
export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/
  return (
    regex.test(url)
  )
}

export const avatarUrlValidationMessage = 'esta no es una url valida papaito:c'