/*
     * 解析URL
     * @param {name} String 参数名称
*/
    function getUrlParam(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    }
/*
     * 地图添加点状覆盖物
     * @param {data} Array [[121.21089,28.25861],[121.1967,28.2563],]形式的数组
     * @param {name} String
*/
    function addMarker(data,name){
        var arrayObj = [];
        $.each(data,function(j,item){{
            if(name==item.type){
                var coastPoints = [];
                $.each(item.point,function(i,val){
                    coastPoints.push(new T.LngLat(val[0],val[1]));
                })
                var icon = new T.Icon({
                    iconUrl:item.iconUrl,
                    iconSize:new T.Point(30,30),
                    iconAnchor:new T.Point(3,3),
                })
                $.each(coastPoints,function(i,val){
                    var myMarker = new T.Marker(val,{icon:icon});
                    arrayObj.push(myMarker);
                    // map.addOverLay(myMarker);          //使用点聚合则无需手动添加点
                })
            }
        }});
        return arrayObj;
    }
/*
     * 地图添加点状覆盖物
     * @param {data} Array 
*/
    function addMudMarker(data){
        var arrayObj = [];
        $.each(data,function(i,val){
            var iconUrl = 'images/';
            switch(val.flag){
                case 1:
                   iconUrl += 'blue.png' ;
                   break;
                case 2:
                   iconUrl += 'green.png' ;
                   break;
                case 3:
                   iconUrl += 'red.png' ;
                   break;
                case 4:
                   iconUrl += 'yellow.png' ;
                   break;
                case 5:
                   iconUrl += 'camer.png' ;
                   break;
            }
            var myCoor = transCoor(val.pos[0],val.pos[1]);
            var icon = new T.Icon({
                iconUrl:iconUrl,
                iconSize:new T.Point(16,16),
            })
            label = new T.Label({
                text: val.mudPoiName,
                position: new T.LngLat(myCoor[0],myCoor[1]),
                offset: new T.Point(2, 12)
            });
            var myMarker = new T.Marker(new T.LngLat(myCoor[0],myCoor[1]),{icon:icon});
            myMarker.addEventListener('click',function(){
                map.centerAndZoom(new T.LngLat(myCoor[0],myCoor[1]), 15);
                if(val.flag==5){
                    var myDate = new Date();
                    var t = myDate.getFullYear()+'-'+myDate.getMonth()+'-'+myDate.getDate()+'&nbsp;&nbsp;&nbsp;'+myDate.getHours()+':'+myDate.getMinutes()+':'+myDate.getSeconds();
                    iconUrl = 'images/camer.png';
                    var str ='<video id="my_video_1" class="video-js vjs-default-skin" controls loop preload="auto" width="301" height="169">'
                            +'<source src="images/mud.mp4" type="video/mp4">'
                            +'<source src="images/mud.webm" type="video/webm">'
                            +'</video>'
                            +'<table id="camerMsg" cellSpacing=0 cellPadding=0 border=1><tr><td>'      //加入视频播放代码
                            +'<tr><td><strong>摄像头实时监控</strong></td></tr>'
                            +'<tr><td><strong>地理位置：</strong>'
                            +myCoor[0]
                            +'&nbsp;&nbsp;,&nbsp;&nbsp;'
                            +myCoor[1]
                            +'</td></tr>'
                            +'<tr><td><strong>滩涂状况：</strong>III级</td></tr>'
                            +'<tr><td><strong>滩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长：</strong>张三国</td></tr>'
                            +'<tr><td><strong>联系电话：</strong>13398769876</td></tr>'
                            +'<tr><td><strong>当前时间：</strong>'
                            +t
                            +'</td></tr></table>';
                    var content = $('<div></div>');
                    content.css({'margin-top':'24px','margin-bottom':'5px'});
                    content.html(str);
                    var infoWindow = new T.InfoWindow(content.get(0)); 
                    map.openInfoWindow(infoWindow,new T.LngLat(myCoor[0],myCoor[1]));
                }
            })
            map.addOverLay(label);
            arrayObj.push(myMarker);
        })
        return arrayObj;
    }
/*
     * 通过传入省市名称获取行政区范围
     * @param {areaName} String 省市名称
     * @param {style} String 行政区对应颜色
*/
    function addCity(areaName,style){
        var LS =  new T.LocalSearch(map,{
            onSearchComplete:function(data){
                var allArea = data.getArea().points;
                $.each(allArea,function(j,item){
                    var thisRegion = item.region.split(',');
                    var newRegion = [];
                    $.each(thisRegion,function(i,val){
                        newRegion.push(val.split(' ').map(function(v){return Number(v);}));
                    })
                    var allPoints = [];
                    $.each(newRegion,function(i,val){
                        allPoints.push(new T.LngLat(val[0], val[1]));
                    })
                    var polygon = new T.Polygon(allPoints,{
                        color: "red", 
                        weight: 2, 
                        opacity: 0.5, 
                        fillColor: style, 
                        fillOpacity: 0.001,
                        lineStyle:"dashed",
                    });
                    //向地图上添加面
                    map.addOverLay(polygon);
                })
            }
        });
        LS.search(areaName,1);
    }
/**
     * 百度坐标转换为WGS84,由于天地图采用是CGCS2000(2000国家大地坐标系),其参考椭球与WGS84的类似，其差别在CM级别，所以点坐标认作WGS84处理
     * @param {bdlng} Number 百度经度
     * @param {bdlat} Number 百度纬度
*/

    function transCoor(bdlng,bdlat){
        // 定义一些常量
        var PI = 3.1415926535897932384626;
        var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
        var a = 6378245.0;
        var ee = 0.00669342162296594323;

        var x = bdlng - 0.0065;
        var y = bdlat - 0.006;
        var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        var gg_lng = z * Math.cos(theta);
        var gg_lat = z * Math.sin(theta);
        if (out_of_china(gg_lng, gg_lat)) {
            return [gg_lng, gg_lat];
        }
        else {
            var dlat = transformlat(gg_lng - 105.0, gg_lat - 35.0);
            var dlng = transformlng(gg_lng - 105.0, gg_lat - 35.0);
            var radlat = gg_lat / 180.0 * PI;
            var magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            var sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            mglat = gg_lat + dlat;
            mglng = gg_lng + dlng;
            return([gg_lng * 2 - mglng, gg_lat * 2 - mglat]);
        }
    }

    function transformlat(lng, lat) {
        var PI = 3.1415926535897932384626;
        var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
        return ret;
    }

    function transformlng(lng, lat) {
        var PI = 3.1415926535897932384626;
        var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
        return ret;
    }
/**
     * 判断是否在国内，不在国内则不做偏移
     * @param lng
     * @param lat
     * @returns {boolean}
 */
    function out_of_china(lng, lat) {
        return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
    }  
/**
     * 显示Label
 */
    function showLabel() {
        var allOverlays = map.getOverlays();
        $.each(allOverlays,function(i,val){
            if(val.getType()==1){
                val.show();
            }
        })
    } 
/**
     * 隐藏Label
 */
    function hideLabel() {
        var allOverlays = map.getOverlays();
        $.each(allOverlays,function(i,val){
            if(val.getType()==1){
                val.hide();
            }
        })
    } 