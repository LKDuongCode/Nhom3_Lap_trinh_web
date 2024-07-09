export const formatDate = (date:Date) => {
    return new Date(date).toLocaleDateString('en-GB'); // 'en-GB' định dạng ngày thành dd/mm/yyyy
  };