import { formatString, fillAry, compare } from './index';

test(`1，输入：“get1_install2_app3_list4_by5_android6” （每个单词后面总会携带一个数字，只有偶数才删掉），我不用循环只用正则怎么实现输出 "get1InstallApp3ListBy5Android"？`, () => {
  const INPUT = 'get1_install2_app3_list4_by5_android6';
  const WANT = 'get1InstallApp3ListBy5Android';
  expect((formatString(INPUT))).toEqual(WANT);
});

test('2，不能使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值。', () => {
  const WANT = [];
  for (let i = 0; i <= 1000; i += 1) {
    WANT.push(i);
  }
  expect(fillAry(0, 1000)).toEqual(WANT);
});


test('3，判断两个对象（注意特殊对象的处理）找出不一致的是哪个变量，返回的格式类似："root变量-父变量-...-不一致的变量"的字符串；', () => {

  expect(compare({ a: 1 }, { a: 2 })).toEqual({ root: { a: 2 }, parent: { a: 2 }, differentValue: 2 })
  expect(
    compare(
      { a: 1, b: [{ a: 2 }] },
      { a: 1, b: [{ a: 3 }] }
    )
  ).toEqual({
    root: { a: 1, b: [{ a: 3 }] },
    parent: { a: 3 },
    differentValue: 3
  })
})