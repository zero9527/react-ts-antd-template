import axios from 'axios';

// 获取文件
const api = {
  // 示例：
  // get只有params才会作为请求参数
  // 其他请求方式如：POST,PUT,PATCH，data作为请求参数
  testApi: (params: any = {}) => {
    // post
    // return axios.post('/api/file/uploadFile', params);

    // get
    return axios.get('/api/file/getFile', { 
      params, 
      data: { showLoading: true }
    });
  }
};

export default api;
