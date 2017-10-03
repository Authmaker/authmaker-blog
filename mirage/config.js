export default function() {

  this.namespace = '/api/v1';


  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id');
  this.del('/posts/:id');


}
