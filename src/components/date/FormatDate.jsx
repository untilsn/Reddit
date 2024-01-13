const dayData = postData?.createAt
  ? new Date(postData?.createAt * 1000)
  : new Date();
const formatDate = new Date(dayData).toLocaleDateString("vi-VN");
