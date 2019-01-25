import { Component } from 'react';
class Constant extends Component {
  constructor(props) {
    super(props);
    this.frontUrl="http://localhost:3000";
    this.limit=100;
    this.url_msg='* Enter the url here or simply paste the URL here';
    this.tag_msg='* Press "Enter/Tab" button to Seperate the tags and keywords';
    this.img_msg='* For better view please upload the image of minimum 260 x 300 and maximum of 5200 x 6000 size.Image type allowed are png, jpg, jpeg.';
    this.backend_api="http://flowhaus.com/flowhaus/api";
    this.img_url="http://flowhaus.com/flowhaus/";
    this.width_img=254;
    this.height_img=260;
    this.maxWidth_img=304;
    this.maxHeight_img=312;
  }
}

export default new Constant();
