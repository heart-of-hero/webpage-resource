class LRPageNumAndSearcher{constructor(e=!1){let l,r,c,a,p="",t=!1;e&&($("div#LR-search").html('\n<form accept-charset="utf-8" onsubmit="lrPgNumAndSearch.doLRSearch(); return false;"><input id="LR-search-text" placeholder="搜尋範例：華嚴 九心" style="width:70%;"><button type="submit" style="margin: 0 6px;">&#x1F50D; </button><input type="reset" style="margin: 0 6px;" onclick="$(\'#LR-search-result\').empty();"><div id="LR-search-result-block" ><span id="LR-search-not-found" style="display:none;">找不到</span><ol id="LR-search-result" style="padding-left:2.6em;"></ol></div></form>\n'),l=$("input#LR-search-text"),r=$("#LR-search-not-found"),c=$("ol#LR-search-result")),a=$("div#LRContent");let g=!1,s=null;if($(".volume, a.pg").click((function(){g=!g,g?a.addClass("overview_mode"):a.removeClass("overview_mode"),$(s).removeClass("focus"),$(this).addClass("focus"),s=this})),$(".lr_eh").click((function(){let e=window.getSelection();(3!=e.focusNode.nodeType||e.isCollapsed)&&$(this).toggleClass("mark")})),e){function e(e){return e.replace(/毗/g,"毘").replace(/痴/g,"癡").replace(/嗔/g,"瞋").replace(/慾/g,"欲").replace(/殼/g,"壳").replace(/杯/g,"盃").replace(/峯/g,"峰").replace(/[煖暖]/g,"[煖暖]").replace(/[刼刧]/g,"劫").replace(/沉/g,"沈").replace(/[决抉]/g,"決").replace(/徧/g,"遍").replace(/驕/g,"憍").replace(/渡/g,"度").replace(/暗/g,"[闇暗]").replace(/[沒歿]/g,"[沒歿]").replace(/[華花]/g,"[華花]").replace(/文[殊書]/g,"曼殊").replace(/曼殊師利/g,"曼殊室利").replace(/[然燃][燈登灯][字自至志制治炙致恣秩眥智稚置漬製誌幟摯緻騭躓鷙]/g,"燃燈智").replace(/[目木][件見建牮荐健楗毽腱僭漸劍澗箭賤踐薦諫鍵餞濺艦鑑鑒][連蓮]/g,"目犍連").replace(/[那拿拏][錯措]/g,"拏錯").replace(/清辨/g,"清辯").replace(/(毘?盧舍|遮|鞞嚧杜|毘盧折|吠嚧遮)那/g,"毘盧遮那").replace(/樸[窮穹]瓦/g,"樸[窮穹]瓦").replace(/迦摩[巴跋]/g,"迦摩[巴跋]").replace(/舍利[弗子佛]/g,"舍利[弗子]").replace(/[句巨拒苣具炬俱倨据詎距犋鉅聚劇踞據窶遽鋸屨颶醵懼][捨舍色瑟]/g,"俱舍").replace(/(修次第?([初中三]|後二|中下二))[編篇]/g,"$1[編篇]").replace(/修次(第|中.)?[下後][編篇]/g,"修次(第|中.)?[下後][編篇]").replace(/三篇修次/g,"三編修次").replace(/(莊嚴經|經莊嚴)論/g,"(莊嚴經|經莊嚴)論").replace(/[辨辯]中邊/g,"辨?中邊").replace(/妙[手臂]請?問經/g,"妙[手臂]請?問經").replace(/海慧請?問?經/g,"海慧請?問?經").replace(/大?般?涅槃經/g,"大?般?涅槃經").replace(/[阿啊][及吉岌汲即极亟佶急洁笈級疾寂戢棘極集嫉楫瘠輯擊籍][嫫摹模膜摩磨糢謨藦蘑魔]/g,"阿笈摩").replace(/分?[辨別]阿笈摩/g,"分?[辨別]阿笈摩").replace(/明?顯句論/g,"明?顯句論").replace(/三摩地王經/g,"三摩地王經?").replace(/[旁傍徬螃龐][生牲]/g,"旁生").replace(/[毘皮枇疲郫陴啤埤猈琵脾鈹蜱貔羆鼙][缽波玻播剝陂坡潑婆鄱皤][什舌色佘圾社舍射涉奢捨猞蛇設赦揲嗇瑟賒銫歙澀穡攝灄麝][吶那肭哪拿納衲捺訥鈉]/g,"毘缽舍那").replace(/[奢賒圾色嗇瑟銫澀穡捨什舌佘蛇揲][摸嫫摹模膜摩磨糢謨藦蘑魔抹末歿沫茉陌秣莫寞漠貊嘜墨瘼默貘鏌饃驀][他它她牠塌褟塔陀]/g,"奢摩他").replace(/[阿啊][什舌色佘圾社舍厙射涉祗奢捨猞蛇設赦揲嗇瑟賒銫遮歙澀穡攝灄麝][厘狸梨犁喱蜊嫠漓貍犛璃黎罹篱縭釐離藜黧蠡灕蘺黐籬驪鱺鸝力立吏利例戾俐]/g,"阿闍黎").replace(/[那吶肭衲納捺訥鈉][婪嵐藍闌襤攔瀾籃蘭斕欄籣讕濫爛鑭][佗陀坨沱砣袉跎酡鉈馱駝橐鴕鼉]/g,"那蘭陀").replace(/[止只旨阯址芷祇祉咫指枳紙趾軹士氏世仕市示室釋][加佳迦枷珈家痂笳袈傢葭跏嘉豭鎵][摸嫫摹模膜摩磨糢謨藦蘑魔][囉摞螺羅鏍儸騾玀蘿邏欏籮鑼剌腊瘌辣臘蠟]/g,"止迦摩囉").replace(/止迦摩囉[士氏世仕市示式事侍室恃拭是柿逝視勢嗜弒試軾飾誓適識釋][囉摞螺羅鏍儸騾玀蘿邏欏籮鑼剌腊瘌辣臘蠟]/g,"止迦摩囉室囉").replace(/[毛犛髦矛酕離梨黎犁釐]牛/g,"氂牛").replace(/[安庵銨鞍俺岸按案菴暗黯阿啊][嫫摹模膜摩磨糢謨藦蘑魔末沫茉陌秣莫寞漠墨默沒][肋勒樂囉羅洛珞落酪]/g,"菴摩洛").replace(/歸依/g,"皈依").replace(/([指華花寶齒燈])[曼墁幔慢漫蔓熳縵鏝瞞謾蹣饅顢鰻蠻]/g,"$1鬘").replace(/[忌嫉][妒妬]/g,"嫉妬").replace(/[詹瞻旜沾栴占善扇鄯擅膳散]部/g,"贍部").replace(/[罄慶磬謦沁撳][盡近浸進禁儘凈凊淨竟靜]/g,"罄盡").replace(/[嬴瀛贏雷嫘纍壘儡磊累]劣/g,"羸劣").replace(/[于余於盂臾俞竽娛萸隅魚崳愉揄渝湡腴逾愚榆瑜瘐腧虞漁褕蝓諛餘踰歟輿][汕疝扇釤善鄯嬗擅膳繕贍騸鱔闍][那吶肭衲納捺訥鈉娜挪]/g,"踰繕那").replace(/[涅臬隉聶鎳孽蘗囁躡鑷泥][槃盤磐蟠搫媻幋縏螌洹]/g,"涅槃").replace(/([依是無])護/g,"$1怙").replace(/[加迦枷珈袈跏茄笳家][夫伕趺跗衭玞肤砆]/g,"跏趺").replace(/[才纏饞讒躔儳嚵巉欃緾纒艬鑱]([入坐說生一])/g,"纔$1").replace(/[懱滅蔑篾蠛衊幭搣瀎礣櫗彌蜜畢][戾力立利麗歷例曆厲勵礪礫吏慄癘唳唎栗淚隸離][車居拘駒沮俱]/g,"懱戾車").replace(/思維/g,"思惟").replace(/憤怒/g,"忿怒").replace(/熾燃/g,"熾然").replace(/([阿安]那阿?[般波]那|安般)/g,"阿那阿?波那").replace(/[虛須需鬚蘇][迷謎彌瀰]/g,"須[彌迷]").replace(/[獅師]子/g,"[獅師]子").replace(/[誹毀]謗/g,"[誹毀]謗").replace(/種[性姓]/g,"種[性姓]").replace(/[那奈][落洛][迦家加佳枷袈跏茄伽]/g,"[那奈][落洛]迦").replace(/[揀簡]擇/g,"[揀簡]擇").replace(/大[車轍]/g,"大[車轍]").replace(/影[像相]/g,"影[像相]").replace(/教授引導/g,"教授.?引導").replace(/極大[罪惡][行刑]/g,"極大[罪惡]行").replace(/自[趣行]消滅/g,"自[趣行]消滅")}function g(e){let l=[],r=[];if(0==e.length)return"";l=e.split("").sort(),r.push(l[0]);for(let e=1,c=l.length;e<c;e++)l[e]!=l[e-1]&&r.push(l[e]);return r.join("")}function s(e,l){let r=new RegExp(l,"g");for(let l=0,c=e.length;l<c;l++)e[l]=e[l].replace(r,"<b class='search-match'>$1</b>")}function n(e){let l;for(l of(c.empty(),e))c.append("<li class='search-result'>"+l+"</li>");$(".search-result").click((function(){let e=window.getSelection();if((3!=e.focusNode.nodeType||e.isCollapsed)&&!window.find(this.innerText)){let e=this.innerText,l=e.length-1;for(;l>1&&!window.find(e.substr(0,l));)l-=1}}))}this.doLRSearch=function(){r.hide(),c.empty(),""==p&&(p=a.text().trim());let i,o,u,d=l.val(),h="";if(d=d.replace(/[^㐀-鶴]/g," ").trim().replace(/\s\s+/g," "),!(d.length>0))return;h=e(d),t||($("div#LR-search-result-block").attr("style","height:14em;overflow:auto;"),t=!0);const f="(?<=[^\\u3400-\\uFA2D])[\\u3400-\\uFA2D]*.{0,5}",m=".{0,5}[\\u3400-\\uFA2D]*(?:$|[^\\u3400-\\uFA2D])";if(u="("+h.replace(/\s/g,".{0,30}")+")",o=new RegExp(f+u+m,"gm"),i=p.match(o),i)return s(i,u),void n(i);if(h.includes(" ")&&(u="("+h.replace(/\s/g,"|")+")",o=new RegExp(f+u+m,"gm"),i=p.match(o),i))return s(i,u),void n(i);let R=g(h.replace(/[\s\[\]]/g,""));if(R.length>=3&&(R="["+R+"]",u="("+R+"{2,}|"+R+".{0,8}"+R+".{0,8}"+R+")",o=new RegExp(f+u+m,"gm"),i=p.match(o),i))return s(i,"("+R+")"),void n(i);r.show()}}}}