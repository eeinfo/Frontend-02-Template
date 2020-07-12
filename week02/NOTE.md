学习笔记
形式语言（乔姆斯基谱系）
0型 无限制文法
1型 上下文相关文法
2型 上下文无关文法
3型 正则文法

产生式(BNF EBNF ABNF Customized)
BNF示例
<MultiplicativeExpression>::=<Number>|
<MultiplicativeExpression>"*"<Number>|
<MultiplicativeExpression>"/"<Number>|
<AddtiveExpression>::=< MultiplicativeExpression>|
<AddtiveExpression>"+"<MultiplicativeExpression>|
<AddtiveExpression>"-"<MultiplicativeExpression>|

图灵完备性：命令式——图灵机，• 声明式——lambda
动态与静态
动态：在用户的设备/在线服务器上，产品实际运行时，Runtime
静态：
在程序员的设备上，产品开发时，Compiletime

类型系统
动态类型系统与静态类型系统，强类型与弱类型，复合类型，子类型，泛型（逆变/协变）

获取Undefined的建议方式是 void 0;

Object—Class
类是一种常见的描述对象的方式。而”归类”和”分类”则是两个主要的流派。对于”归类”方法而言，多继承是非常自然的事情。如C++而采用分类思想的计算机语言，则是单继承结构。并且会有一个基类Object。

Object—Prototype
原型是一种更接近人类原始认知的描述对象的方法。我们并不试图做严谨的分类，而是采用“相似”这样的方式去描述对象。任何对象仅仅需要描述它自己与原型的区别即可。