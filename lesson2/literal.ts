function lit(url: string, method: 'post' | 'get'){

}
lit('s', 'post');

let method = 'post';
//приведення до типу або просто написати  const замість let
lit('s', method as 'post');

