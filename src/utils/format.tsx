export const capitalizeFirstLetter = (string: string) => {
  if (typeof string !== 'string' || string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
