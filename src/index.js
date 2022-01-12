//tree shaking只支持ES module(import from)模块的引入
//ES module模块底层是静态引入的形式，commonJS是动态引入。
import {add} from './math.js';;
add(1,2)