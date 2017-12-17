define(function() {

    var dark = {
        // 鍏ㄥ浘榛樿鑳屾櫙
        backgroundColor: '#1b1b1b',

        // 榛樿鑹叉澘


        /* color: [
             '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
             '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
             '#B5C334'  001852
         ],*/
        color: [
            '#D7504B','#27E081','#26C0C0','#60C0DD','#0084C6',
            '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
            '#B5C334'
        ],


        // 鍥捐〃鏍囬
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#fff'          // 涓绘爣棰樻枃瀛楅鑹�
            }
        },

        // 鍥句緥
        legend: {
            textStyle: {
                color: '#ccc'          // 鍥句緥鏂囧瓧棰滆壊
            }
        },

        // 鍊煎煙
        dataRange: {
            itemWidth: 15,
            color: ['#FFF808','#21BCF9'],
            textStyle: {
                color: '#ccc'          // 鍊煎煙鏂囧瓧棰滆壊
            }
        },

        toolbox: {
            color : ['#fff', '#fff', '#fff', '#fff'],
            effectiveColor : '#FE8463',
            disableColor: '#666'
        },

        // 鎻愮ず妗�
        tooltip: {
            backgroundColor: 'rgba(250,250,250,0.8)',     // 鎻愮ず鑳屾櫙棰滆壊锛岄粯璁や负閫忔槑搴︿负0.7鐨勯粦鑹�
            axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
                type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
                lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                    color: '#aaa'
                },
                crossStyle: {
                    color: '#aaa'
                },
                shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                    color: 'rgba(200,200,200,0.2)'
                }
            },
            textStyle: {
                color: '#333'
            }
        },

        // 鍖哄煙缂╂斁鎺у埗鍣�
        dataZoom: {
            dataBackgroundColor: '#555',            // 鏁版嵁鑳屾櫙棰滆壊
            fillerColor: 'rgba(200,200,200,0.2)',   // 濉厖棰滆壊
            handleColor: '#eee'     // 鎵嬫焺棰滆壊
        },

        // 缃戞牸
        grid: {
            borderWidth: 0
        },

        // 绫荤洰杞�
        categoryAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: false
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                show: false
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                show: false
            }
        },

        // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
        valueAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: false
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                show: false
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#aaa'],
                    type: 'dashed'
                }
            },
            splitArea: {           // 鍒嗛殧鍖哄煙
                show: false
            }
        },

        polar : {
            name : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#ccc'
                }
            },
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#ddd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#ddd'
                }
            }
        },

        timeline : {
            label: {
                textStyle:{
                    color: '#ccc'
                }
            },
            lineStyle : {
                color : '#aaa'
            },
            controlStyle : {
                normal : { color : '#fff'},
                emphasis : { color : '#FE8463'}
            },
            symbolSize : 3
        },

        // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
        line: {
            smooth : true
        },

        // K绾垮浘榛樿鍙傛暟
        k: {
            itemStyle: {
                normal: {
                    color: '#FE8463',       // 闃崇嚎濉厖棰滆壊
                    color0: '#9BCA63',      // 闃寸嚎濉厖棰滆壊
                    lineStyle: {
                        width: 1,
                        color: '#FE8463',   // 闃崇嚎杈规棰滆壊
                        color0: '#9BCA63'   // 闃寸嚎杈规棰滆壊
                    }
                }
            }
        },

        // 闆疯揪鍥鹃粯璁ゅ弬鏁�
        radar : {
            symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
            symbolSize:3
            //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
            //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
        },

        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor : 'rgba(255, 255, 255, 0.5)'
                },
                emphasis: {
                    borderWidth: 1,
                    borderColor : 'rgba(255, 255, 255, 1)'
                }
            }
        },

        map: {
            itemStyle: {
                normal: {
                    borderColor:'rgba(255, 255, 255, 0.5)',
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            // color: '#ccc'
                        }
                    }
                },
                emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                    areaStyle: {
                        color: '#FE8463'
                    },
                    label: {
                        textStyle: {
                            // color: 'ccc'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#fff'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(228, 228, 228, 0.2)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(228, 228, 228, 0.2)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(228, 228, 228, 0.9)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(228, 228, 228, 0.9)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // 鍧愭爣杞寸嚎
                show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                    width: 3,
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                length :15,        // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: 'auto',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 鍧愭爣杞村皬鏍囪
                textStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    fontWeight: 'bolder',
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                length :25,         // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    width:3,
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            pointer: {           // 鍒嗛殧绾�
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 5
            },
            title : {
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //榛樿閫忔槑
                    shadowBlur: 10
                }
            },
            detail : {
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 5,
                offsetCenter: [0, '50%'],       // x, y锛屽崟浣峱x
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            }
        },

        funnel : {
            itemStyle: {
                normal: {
                    borderColor : 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1
                },
                emphasis: {
                    borderColor : 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }
            }
        },

        textStyle: {
            fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
        }
    };

    return dark;
});
