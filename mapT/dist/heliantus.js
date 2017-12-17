define(function() {
    var theme = {
        backgroundColor: '#F2F2E6',
        // 榛樿鑹叉澘
        color: [
            '#44B7D3','#E42B6D','#F4E24E','#FE9616','#8AED35',
            '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
            '#E95569','#ff6347','#7b68ee','#00fa9a','#ffd700',
            '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'
        ],

        // 鍥捐〃鏍囬
        title: {
            backgroundColor: '#F2F2E6',
            itemGap: 10,               // 涓诲壇鏍囬绾靛悜闂撮殧锛屽崟浣峱x锛岄粯璁や负10锛�
            textStyle: {
                color: '#8A826D'          // 涓绘爣棰樻枃瀛楅鑹�
            },
            subtextStyle: {
                color: '#E877A3'          // 鍓爣棰樻枃瀛楅鑹�
            }
        },

        // 鍊煎煙
        dataRange: {
            x:'right',
            y:'center',
            itemWidth: 5,
            itemHeight:25,
            color:['#E42B6D','#F9AD96'],
            text:['楂�','浣�'],         // 鏂囨湰锛岄粯璁や负鏁板€兼枃鏈�
            textStyle: {
                color: '#8A826D'          // 鍊煎煙鏂囧瓧棰滆壊
            }
        },

        toolbox: {
            color : ['#E95569','#E95569','#E95569','#E95569'],
            effectiveColor : '#ff4500',
            itemGap: 8
        },

        // 鎻愮ず妗�
        tooltip: {
            backgroundColor: 'rgba(138,130,109,0.7)',     // 鎻愮ず鑳屾櫙棰滆壊锛岄粯璁や负閫忔槑搴︿负0.7鐨勯粦鑹�
            axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
                type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
                lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                    color: '#6B6455',
                    type: 'dashed'
                },
                crossStyle: {          //鍗佸瓧鍑嗘槦鎸囩ず鍣�
                    color: '#A6A299'
                },
                shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        // 鍖哄煙缂╂斁鎺у埗鍣�
        dataZoom: {
            dataBackgroundColor: 'rgba(130,197,209,0.6)',            // 鏁版嵁鑳屾櫙棰滆壊
            fillerColor: 'rgba(233,84,105,0.1)',   // 濉厖棰滆壊
            handleColor: 'rgba(107,99,84,0.8)'     // 鎵嬫焺棰滆壊
        },

        // 缃戞牸
        grid: {
            borderWidth:0
        },

        // 绫荤洰杞�
        categoryAxis: {
            axisLine: {            // 鍧愭爣杞寸嚎
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#6B6455'
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
            splitArea : {
                show: false
            },
            splitLine: {           // 鍒嗛殧绾�
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: ['#FFF'],
                    type: 'dashed'
                }
            }
        },

        polar : {
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
            lineStyle : {
                color : '#6B6455'
            },
            controlStyle : {
                normal : { color : '#6B6455'},
                emphasis : { color : '#6B6455'}
            },
            symbol : 'emptyCircle',
            symbolSize : 3
        },

        // 鏌卞舰鍥鹃粯璁ゅ弬鏁�
        bar: {
            itemStyle: {
                normal: {
                    barBorderRadius: 0
                },
                emphasis: {
                    barBorderRadius: 0
                }
            }
        },

        // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
        line: {
            smooth : true,
            symbol: 'emptyCircle',  // 鎷愮偣鍥惧舰绫诲瀷
            symbolSize: 3           // 鎷愮偣鍥惧舰澶у皬
        },


        // K绾垮浘榛樿鍙傛暟
        k: {
            itemStyle: {
                normal: {
                    color: '#E42B6D',       // 闃崇嚎濉厖棰滆壊
                    color0: '#44B7D3',      // 闃寸嚎濉厖棰滆壊
                    lineStyle: {
                        width: 1,
                        color: '#E42B6D',   // 闃崇嚎杈规棰滆壊
                        color0: '#44B7D3'   // 闃寸嚎杈规棰滆壊
                    }
                }
            }
        },

        // 鏁ｇ偣鍥鹃粯璁ゅ弬鏁�
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth:1,
                    borderColor:'rgba(200,200,200,0.5)'
                },
                emphasis: {
                    borderWidth:0
                }
            },
            symbol: 'circle',    // 鍥惧舰绫诲瀷
            symbolSize: 4        // 鍥惧舰澶у皬锛屽崐瀹斤紙鍗婂緞锛夊弬鏁帮紝褰撳浘褰负鏂瑰悜鎴栬彵褰㈠垯鎬诲搴︿负symbolSize * 2
        },

        // 闆疯揪鍥鹃粯璁ゅ弬鏁�
        radar : {
            symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
            symbolSize:3
            //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
            //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#E42B6D'
                        }
                    }
                },
                emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                    areaStyle: {
                        color: '#fe994e'
                    },
                    label: {
                        textStyle: {
                            color: 'rgb(100,0,0)'
                        }
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    nodeStyle : {
                        borderColor : 'rgba(0,0,0,0)'
                    },
                    linkStyle : {
                        color : '#6B6455'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    chordStyle : {
                        lineStyle : {
                            width : 0,
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    chordStyle : {
                        lineStyle : {
                            width : 1,
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {                  // 浠〃鐩�
            center:['50%','80%'],
            radius:'100%',
            startAngle: 180,
            endAngle : 0,
            axisLine: {            // 鍧愭爣杞寸嚎
                show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: [[0.2, '#44B7D3'],[0.8, '#6B6455'],[1, '#E42B6D']],
                    width: '40%'
                }
            },
            axisTick: {            // 鍧愭爣杞村皬鏍囪
                splitNumber: 2,   // 姣忎唤split缁嗗垎澶氬皯娈�
                length: 5,        // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                    color: '#fff'
                }
            },
            axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: '#fff',
                    fontWeight:'bolder'
                }
            },
            splitLine: {           // 鍒嗛殧绾�
                length: '5%',         // 灞炴€ength鎺у埗绾块暱
                lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                    color: '#fff'
                }
            },
            pointer : {
                width : '40%',
                length: '80%',
                color: '#fff'
            },
            title : {
                offsetCenter: [0, -20],       // x, y锛屽崟浣峱x
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: 'auto',
                    fontSize: 20
                }
            },
            detail : {
                offsetCenter: [0, 0],       // x, y锛屽崟浣峱x
                textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                    color: 'auto',
                    fontSize: 40
                }
            }
        },

        textStyle: {
            fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
        }
    };

    return theme;
});
