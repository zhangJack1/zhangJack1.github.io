# 发展

::: tip 说明
对知识的回顾可能能更好的运用
:::


::: timeline 1945
- 
  - 二战结束
  - 雅尔塔体制确立
- 
:::

::: timeline 1947

- 冷战开始
- 杜鲁门主义

:::
::: timeline 1949
- 北约组织建立
:::
::: timeline 1955
- 两级格局形成
- 华约组织建立
:::


<audio/>

## 音视频
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1488737309&auto=1&height=66"></iframe> 





视频：

<Video
    src="/lol.mp4"
    :width="666.67"
    :height="375"
    :second="45" />


<iframe src="//player.bilibili.com/player.html?aid=1402082162&bvid=BV19r42187nk&cid=1479266252&p=1" scrolling="no" border="0" 
width="500" height="400"
frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>




## 绘制流程图
绘图教程：https://zhuanlan.zhihu.com/p/139166407#Mermaid%20%E7%BB%98%E5%9B%BE
流程图
``` mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    D-->E;
```
时序图
``` mermaid
sequenceDiagram

Alice->>John: Hello John, how are you?
loop Healthcheck
John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob : How about you?
Bob-->>John : Jolly good!

```

甘特图
```mermaid
graph TB

id1(圆角矩形)--普通线-->id2[矩形];
subgraph 子图
id2==粗线==>id3{菱形}
id3-. 虚线.->id4>右向旗帜
id3--无箭头---id5((圆形))
end
```



类图
``` mermaid
classDiagram

  Class01 <|-- AveryLongClass: Cool
  <<interface>> Class01
  Class09-->C2: Where am i?
  Class09 --* C3
  Class09 --|> Class07
  Class07: equals()
  Class07: Object[] elementData
  Class01: size()
  Class01: int chimp
  Class01: int gorilla
  class Class10 {
  <<service>>
  int id
  size()
}
```
状态图
``` mermaid
stateDiagram

[*]-->Active
state Active {
[*]-->NumLockOff
NumLockOff-->NumLockOn : EvNumLockPressed
NumLockOn-->NumLockOff : EvNumLockPressed
--
[*]-->CapsLockOff
CapsLockOff-->CapsLockOn : EvCapsLockPressed
CapsLockOn-->CapsLockOff : EvCapsLockPressed
--
[*]-->ScrollLockOff
ScrollLockOff-->ScrollLockOn : EvCapsLockPressed
ScrollLockOn-->ScrollLockOff : EvCapsLockPressed
}

```
实体关系图
``` mermaid
erDiagram
CUSTOMER ||--o{ORDER : places
ORDER ||--|{LINE-ITEM : contains
CUSTOMER}|..|{DELIVERY-ADDRESS : uses


```
饼图
``` mermaid
pie

title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5


```
旅程图

``` mermaid
journey
title My working day
section Go to work
Make tea: 5: Me
Go upstairs: 3: Me
Do work: 1: Me, Cat
section Go home
Go downstairs: 5: Me
Sit down: 3: Me

```

``` mermaid
gitGraph:
options
{
"nodeSpacing": 150,
"nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch

```

``` mermaid

flowchart LR

start["fa:fa-address-card packageData\n组装数据"] --> if_1{"fa:fa-code-fork if_1判断1"}

if_1 -->|"条件1,指定供应商"| channel1["channel1\n供应商1"]
if_1 -->|"条件2,指定供应商"| channel2[channel2\n供应商2]
if_1 -->|"条件3,并行获取\n供应商渠道剩余量"| if_3((" "))
if_1 -->|"条件4,各种复杂判断"| if_4["biz1获取业务动态值"]

subgraph " "
d1["channel1Query\n获取供应商1剩余量"]
d2["channe2Query\n获取供应商1剩余量"]
d3["channe3Query\n获取供应商1剩余量"]
d4["channe4Query\n获取供应商1剩余量"]
d5["channe5Query\n获取供应商1剩余量"]
d6["channe6Query\n获取供应商1剩余量"]

if_3 --> d1 & d2 & d3 & d4  & d5  & d6

d22["channelSelectc选出剩余量\n最多的那个供应商"]
d1 --> d22
d2 --> d22
d3 --> d22
d4 --> d22
d5 --> d22
d6 --> d22
end  

if_4 --> f{"if_2判断2"}
subgraph " "
f --> f1["channel3供应商3"]
f --> f2["channel4供应商4"]

f --> f3{"if_3判断3"}
f3 --> g1["channel5供应商5"]
f3 --> g2["channel6供应商6"]
g1 & g2 --> JJ((" "))

f1 & f2 & JJ--> f1f2((" "))

end  

channel1 --> stop["batchsende\n批量发送消息"]
channel2 --> stop
d22 --> stop
f1f2 --> stop


```


