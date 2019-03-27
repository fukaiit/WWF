//数据初始化
function init() {
    var data = {
        list: [{
                text: '常用 Hot',
                icon: 'glyphicon-star',
                links: [{
                        text: 'Google',
                        href: 'http://google.hw798.com/webhp?hl=zh-CN&sa=X&ved=0ahUKEwjQ3v6T1NjfAhVRJDQIHbbjA0wQPAgH',
                        img: 'assets/images/logos/google.jpg',
                        description: '不用翻墙的 Google'
                    }, {
                        text: 'Maven Repository',
                        href: 'https://mvnrepository.com/',
                        img: 'https://mvnrepository.com/assets/images/7080b8b0f6f48e6fbaffd5f9d85fcc7f-favicon.ico',
                        description: 'maven仓库'
                    },
                    {
                        text: 'SPRING INITIALIZR',
                        href: 'https://start.spring.io/',
                        img: 'https://start.spring.io/public/favicon.ico',
                        description: 'bootstrap your application now'
                    }
                ],
                sub_list: [{
                        text: '前端开发',
                        icon: 'glyphicon-screenshot',
                        sub_links: [{
                                text: 'Bootstrap V3',
                                href: 'https://v3.bootcss.com/css/',
                                img: 'http://assets.bootcss.com/www/assets/ico/apple-touch-icon-precomposed.png?1545900910495',
                                description: 'Bootstrap 3 中文文档'
                            },
                            {
                                text: 'Vue.js',
                                href: 'https://cn.vuejs.org/',
                                img: 'https://cn.vuejs.org/images/icons/apple-icon-60x60.png',
                                description: '渐进式JavaScript 框架'
                            },
                            {
                                text: 'AdminLTE 2',
                                href: 'http://adminlte.la998.com/pages/UI/icons.html',
                                img: 'assets/images/logos/adminlte.jpg',
                                description: 'Demo & icon'
                            },
                            {
                                text: 'Datatables',
                                href: 'http://www.datatables.club/reference/',
                                img: 'http://www.datatables.club/images/favicon.png',
                                description: 'Datatables中文网'
                            },
                            {
                                text: 'layer',
                                href: 'https://layer.layui.com/',
                                img: 'assets/images/logos/layer.png',
                                description: 'jQuery弹出层插件'
                            },
                            {
                                text: 'Iconfont',
                                href: 'https://www.iconfont.cn/',
                                img: 'https://gtms04.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico',
                                description: '阿里巴巴矢量图标库'
                            },
                            {
                                text: 'Font Awesome',
                                href: 'https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free',
                                img: 'https://fontawesome.com/images/favicons/apple-icon-57x57.png',
                                description: '已设定选择条件，选择fa for AdminLTE'
                            }
                        ]
                    },
                    {
                        text: '教程网站',
                        icon: 'glyphicon-education',
                        sub_links: [{
                                text: '慕课网',
                                href: 'https://www.imooc.com/',
                                img: 'https://www.imooc.com/static/img/common/touch-icon-ipad.png',
                                description: '程序员的梦工厂'
                            },
                            {
                                text: 'freeCodeCamp',
                                href: 'https://www.freecodecamp.cn/home',
                                img: 'https://www.freecodecamp.cn/favicons/apple-touch-icon-precomposed.png',
                                description: 'freeCodeCamp中文社区'
                            },
                            {
                                text: '实验楼',
                                href: 'https://www.shiyanlou.com/',
                                img: 'https://static.shiyanlou.com/favicon.ico',
                                description: '做实验，学编程'
                            },
                            {
                                text: 'oeasy',
                                href: 'http://oeasy.org/',
                                img: 'http://oeasy.org/favicon.ico',
                                description: '会玩才会学'
                            },
                            {
                                text: '牛客网',
                                href: 'https://www.nowcoder.com/',
                                img: 'assets/images/logos/niuke.png',
                                description: '互联网求职神器'
                            }
                        ]
                    }
                ]
            }
            /*,
                        {
                            text: '后端 Back-End',
                            icon: 'glyphicon-screenshot',
                            links: [{
                                    text: 'xxx',
                                    href: 'xxx',
                                    img: 'xxx',
                                    description: 'xxx'
                                },
                                {
                                    text: 'xxx',
                                    href: 'xxx',
                                    img: 'xxx',
                                    description: 'xxx'
                                }
                            ],
                            sub_list: [{
                                    text: '二级1',
                                    icon: 'glyphicon-screenshot',
                                    sub_links: [{
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        },
                                        {
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        }
                                    ]
                                },
                                {
                                    text: '二级2',
                                    icon: 'glyphicon-map-marker',
                                    sub_links: [{
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        },
                                        {
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            text: '前端 Front-End',
                            icon: 'glyphicon-map-marker',
                            links: [{
                                    text: 'xxx',
                                    href: 'xxx',
                                    img: 'xxx',
                                    description: 'xxx'
                                },
                                {
                                    text: 'xxx',
                                    href: 'xxx',
                                    img: 'xxx',
                                    description: 'xxx'
                                }
                            ],
                            sub_list: [{
                                    text: '二级1',
                                    icon: 'glyphicon-screenshot',
                                    sub_links: [{
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        },
                                        {
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        }
                                    ]
                                },
                                {
                                    text: '二级2',
                                    icon: 'glyphicon-map-marker',
                                    sub_links: [{
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        },
                                        {
                                            text: 'xxx',
                                            href: 'xxx',
                                            img: 'xxx',
                                            description: 'xxx'
                                        }
                                    ]
                                }
                            ]
                        }*/
            ,
            {
                text: '设计 Design',
                icon: 'glyphicon-picture',
                links: [{
                        text: '创造师导航',
                        href: 'http://chuangzaoshi.com/',
                        img: 'http://chuangzaoshi.com/assets/images/favicon.png',
                        description: '为创意工作者而设计'
                    }
                ]
            }
        ]
    };

    var nav = new Vue({
        el: '#nav',
        data: data
    });
    var content = new Vue({
        el: '#content',
        data: data
    });
}
