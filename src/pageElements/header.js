const createHeader = () => {
  const headerEle = document.createElement('div');
  const title = document.createElement('h1');
  headerEle.setAttribute('id', 'header');
  title.innerHTML = 'LeaderBoard';
  headerEle.appendChild(title);
  console.log(headerEle);
  return headerEle;
}

export default createHeader;
