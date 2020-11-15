const lib = require('./index.js');
const seq = lib.seq;

test(
  'seq(0) is []',
  () => expect( seq(0) ).toStrictEqual( [] )
);

test(
  'seq(1) is [0]',
  () => expect( seq(1) ).toStrictEqual( [0] )
);

test(
  'seq(7) is [0,1,2,3,4,5,6]',
  () => expect( seq(7) ).toStrictEqual( [0,1,2,3,4,5,6] )
);
