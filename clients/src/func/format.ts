export const formatDate = (date:Date) => {
    return new Date(date).toLocaleDateString('en-GB'); // 'en-GB' định dạng ngày thành dd/mm/yyyy
  };

export const validatePhoneNumber= (phoneNumber:string) =>{
  // Loại bỏ khoảng trắng ở đầu và cuối
  phoneNumber = phoneNumber.trim();

  // Kiểm tra độ dài của số điện thoại
  if (phoneNumber.length < 10 || phoneNumber.length > 12) {
    return false;
  }

  // Kiểm tra xem có phải chỉ gồm số hay không
  if (!/^\d+$/.test(phoneNumber)) {
    return false;
  }

  // Nếu vượt qua tất cả các kiểm tra, số điện thoại hợp lệ
  return true;
}