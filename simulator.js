(function (argument) {
	var landData = {"http://mesis.twimpt.com/hakomesis/image/sea.gif":"海","http://mesis.twimpt.com/hakomesis/image/ice_sea.gif":"凍結海域","http://mesis.twimpt.com/hakomesis/image/osen_sea.gif":"汚染海域","http://mesis.twimpt.com/hakomesis/image/shoal.gif":"浅瀬","http://mesis.twimpt.com/hakomesis/image/ice_shl.gif":"凍結浅瀬","http://mesis.twimpt.com/hakomesis/image/osen_shl.gif":"汚染浅瀬","http://mesis.twimpt.com/hakomesis/image/waste.gif":"荒地","http://mesis.twimpt.com/hakomesis/image/fire.gif":"炎上地域","http://mesis.twimpt.com/hakomesis/image/magma.gif":"溶岩地域","http://mesis.twimpt.com/hakomesis/image/ice_land.gif":"凍結地域","http://mesis.twimpt.com/hakomesis/image/osen_land.gif":"汚染地域","http://mesis.twimpt.com/hakomesis/image/plains.gif":"平地","http://mesis.twimpt.com/hakomesis/image/forest.gif":"森","http://mesis.twimpt.com/hakomesis/image/sango.gif":"サンゴ礁","http://mesis.twimpt.com/hakomesis/image/sango_r.gif":"虹色サンゴ礁","http://mesis.twimpt.com/hakomesis/image/sango_l.gif":"光り輝くサンゴ礁","http://mesis.twimpt.com/hakomesis/image/rot_sea.gif":"腐海","http://mesis.twimpt.com/hakomesis/image/w_rot_sea.gif":"枯腐海","http://mesis.twimpt.com/hakomesis/image/village.gif":"村","http://mesis.twimpt.com/hakomesis/image/town.gif":"町","http://mesis.twimpt.com/hakomesis/image/city.gif":"都市","http://mesis.twimpt.com/hakomesis/image/b_town.gif":"大都市","http://mesis.twimpt.com/hakomesis/image/h_town.gif":"巨大都市","http://mesis.twimpt.com/hakomesis/image/new_town.gif":"新都市","http://mesis.twimpt.com/hakomesis/image/now_town.gif":"現代都市","http://mesis.twimpt.com/hakomesis/image/fu_town.gif":"近未来都市","http://mesis.twimpt.com/hakomesis/image/f_town.gif":"森林都市","http://mesis.twimpt.com/hakomesis/image/f_b_town.gif":"森林大都市","http://mesis.twimpt.com/hakomesis/image/f_h_town.gif":"森林巨大都市","http://mesis.twimpt.com/hakomesis/image/f_new_town.gif":"森林新都市","http://mesis.twimpt.com/hakomesis/image/f_now_town.gif":"森林現代都市","http://mesis.twimpt.com/hakomesis/image/m_village.gif":"海上村","http://mesis.twimpt.com/hakomesis/image/m_town.gif":"海上町","http://mesis.twimpt.com/hakomesis/image/m_city.gif":"海上都市","http://mesis.twimpt.com/hakomesis/image/m_b_town.gif":"海上大都市","http://mesis.twimpt.com/hakomesis/image/m_h_town.gif":"海上巨大都市","http://mesis.twimpt.com/hakomesis/image/m_new_town.gif":"海上新都市","http://mesis.twimpt.com/hakomesis/image/m_now_town.gif":"海上現代都市","http://mesis.twimpt.com/hakomesis/image/s_town.gif":"海底大都市","http://mesis.twimpt.com/hakomesis/image/s_h_town.gif":"海底巨大都市","http://mesis.twimpt.com/hakomesis/image/s_new_town.gif":"海底新都市","http://mesis.twimpt.com/hakomesis/image/s_now_town.gif":"海底現代都市","http://mesis.twimpt.com/hakomesis/image/port_town.gif":"港町","http://mesis.twimpt.com/hakomesis/image/port_city.gif":"海商都市","http://mesis.twimpt.com/hakomesis/image/p_b_town.gif":"海商大都市","http://mesis.twimpt.com/hakomesis/image/gold_town.gif":"黄金都市","http://mesis.twimpt.com/hakomesis/image/h_g_town.gif":"巨大黄金都市","http://mesis.twimpt.com/hakomesis/image/farm.gif":"農場","http://mesis.twimpt.com/hakomesis/image/farm_s.gif":"防災農場","http://mesis.twimpt.com/hakomesis/image/b_farm_s.gif":"防災大農場","http://mesis.twimpt.com/hakomesis/image/farm_labo.gif":"農学研究所","http://mesis.twimpt.com/hakomesis/image/s_farm.gif":"海底農場","http://mesis.twimpt.com/hakomesis/image/s_b_farm.gif":"海底大農場","http://mesis.twimpt.com/hakomesis/image/nursery.gif":"養殖場","http://mesis.twimpt.com/hakomesis/image/park.gif":"遊園地","http://mesis.twimpt.com/hakomesis/image/m_park.gif":"海上遊園地","http://mesis.twimpt.com/hakomesis/image/factory.gif":"工場","http://mesis.twimpt.com/hakomesis/image/factory_s.gif":"防災工場","http://mesis.twimpt.com/hakomesis/image/b_factory.gif":"大工場","http://mesis.twimpt.com/hakomesis/image/fact_labo.gif":"工学研究所","http://mesis.twimpt.com/hakomesis/image/s_factory.gif":"海底工場","http://mesis.twimpt.com/hakomesis/image/s_b_factory.gif":"海底大工場","http://mesis.twimpt.com/hakomesis/image/mountain.gif":"山","http://mesis.twimpt.com/hakomesis/image/ice_mt.gif":"凍結山域","http://mesis.twimpt.com/hakomesis/image/osen_mt.gif":"汚染山域","http://mesis.twimpt.com/hakomesis/image/base.gif":"追加ミサイル基地","http://mesis.twimpt.com/hakomesis/image/d_base.gif":"防衛ミサイル基地","http://mesis.twimpt.com/hakomesis/image/s_base.gif":"海底追加基地","http://mesis.twimpt.com/hakomesis/image/canon.gif":"波動砲台","http://mesis.twimpt.com/hakomesis/image/defence.gif":"防衛施設","http://mesis.twimpt.com/hakomesis/image/h_defence.gif":"範囲強化防衛施設","http://mesis.twimpt.com/hakomesis/image/p_defence.gif":"威力強化防衛施設","http://mesis.twimpt.com/hakomesis/image/d_defence.gif":"全強化防衛施設","http://mesis.twimpt.com/hakomesis/image/barrier.gif":"結界発生施設","http://mesis.twimpt.com/hakomesis/image/chk_point.gif":"関所","http://mesis.twimpt.com/hakomesis/image/oil.gif":"海底油田","http://mesis.twimpt.com/hakomesis/image/mine.gif":"地雷","http://mesis.twimpt.com/hakomesis/image/monument0.gif":"記念碑","http://mesis.twimpt.com/hakomesis/image/monumenth.gif":"ハリボテ","http://mesis.twimpt.com/hakomesis/image/monumentg.gif":"純金の碑","http://mesis.twimpt.com/hakomesis/image/stoneF.gif":"炎石","http://mesis.twimpt.com/hakomesis/image/astoneF.gif":"人工炎石","http://mesis.twimpt.com/hakomesis/image/astoneI.gif":"人工氷石","http://mesis.twimpt.com/hakomesis/image/astoneG.gif":"人工地石","http://mesis.twimpt.com/hakomesis/image/astoneA.gif":"人工風石","http://mesis.twimpt.com/hakomesis/image/astoneH.gif":"人工光石","http://mesis.twimpt.com/hakomesis/image/astoneD.gif":"人工闇石","http://mesis.twimpt.com/hakomesis/image/astoneM.gif":"人工金石","http://mesis.twimpt.com/hakomesis/image/astoneW.gif":"人工木石","http://mesis.twimpt.com/hakomesis/image/stoneI.gif":"氷石","http://mesis.twimpt.com/hakomesis/image/stoneG.gif":"地石","http://mesis.twimpt.com/hakomesis/image/stoneA.gif":"風石","http://mesis.twimpt.com/hakomesis/image/stoneH.gif":"光石","http://mesis.twimpt.com/hakomesis/image/stoneD.gif":"闇石","http://mesis.twimpt.com/hakomesis/image/stoneM.gif":"金石","http://mesis.twimpt.com/hakomesis/image/stoneW.gif":"木石","http://mesis.twimpt.com/hakomesis/image/stoneSR.gif":"虹石","http://mesis.twimpt.com/hakomesis/image/stoneSF.gif":"焔石","http://mesis.twimpt.com/hakomesis/image/stoneSS.gif":"海石","http://mesis.twimpt.com/hakomesis/image/stoneSC.gif":"覇石","http://mesis.twimpt.com/hakomesis/image/stoneSH.gif":"天石","http://mesis.twimpt.com/hakomesis/image/stoneSG.gif":"神石","http://mesis.twimpt.com/hakomesis/image/stoneSE.gif":"魔石","http://mesis.twimpt.com/hakomesis/image/stoneSM.gif":"月石","http://mesis.twimpt.com/hakomesis/image/stoneST.gif":"樹石"};
	var landList = Object.keys(landData).map(x=>[x, landData[x]]);

	var imgs = [];
	var landType = [];
	document.body.innerHTML = '<table><tr>'
		+ '<td id="base" style="border: solid 3px blue; line-height: 0px"></td>'
		+ '<td id="menu" style="vertical-align:top">'
			+ '<div><label><input type="checkbox" id="ui_grid" />Grid</label></div>'
			+ '<div><select id="select"></select></div>'
			+ '<div id="stats" style="background-color:white; overflow:scroll; width:250px; height:500px"></div>'
			+ '<div><input type="button" value="読み込み" id="read" /><input type="button" value="書き出し" id="write" /><br />'
			+ '<textarea id="textarea" style="width:100%; height:200px"></textarea></div>'
		+ '</td></tr></table>';
	var base = document.getElementById('base');
	function makeIMG(url, width, height) {
		var img = document.createElement("img");
		img.src = url;
		img.width = width, img.height = height;
		return img;
	}
	base.append(makeIMG("http://mesis.twimpt.com/hakomesis/image/xbar24.gif", 784, 16));
	for(var i = 0; i < 24; i++){
		base.append(document.createElement("br"));
		if(i % 2 == 0) base.append(makeIMG("http://mesis.twimpt.com/hakomesis/image/space" + i + ".gif", 16, 32));
		for(var j = 0; j < 24; j++){
			var img = makeIMG("http://mesis.twimpt.com/hakomesis/image/sea.gif", 32, 32);
			img.draggable = false;			
			img.title = "(" + i + ", " + j + ") 海";
			img.cellIndex = i * 24 + j;
			img.cellX = i;
			img.cellY = j;
			img.isCell = true;
			base.append(img);
			imgs.push(img);
			landType[img.cellIndex] = 0;
		}
		if(i % 2 == 1) base.append(makeIMG("http://mesis.twimpt.com/hakomesis/image/space" + i + ".gif", 16, 32));
	}

	document.getElementById('ui_grid').addEventListener("change", function (e) {
		var checked = e.target.checked;
		imgs.forEach(function (img) {
			if(checked){
				img.style["border-style"] = "solid";
				img.style["border-width"] = "1px";
				img.style["border-color"] = "#FFFFFF";
				img.style["box-sizing"] = "border-box";
			}else{
				img.style["border-style"] = "none";
			}
		})
	});
	var selection = document.getElementById("select");
	landList.forEach(function(x){selection.append(new Option(x[1], x[0]))});

	var stats = document.getElementById("stats");

	var mousePushing = false;
	function onMouseDown(e) {
		if(!e.target.isCell) return;
		mousePushing = true;
		onMouseOver(e);
	}

	function onMouseUpOrLeave(e) {
		mousePushing = false;
	}

	function onMouseOver(e) {
		if(!(mousePushing && e.target.isCell)) return;
		var img = e.target;
		var type = selection.selectedIndex;
		if(draw(img, type)) updateStats();		
	}

	function draw(img, type) {
		if(!landList[type] || !img) return false;
		if(landType[img.cellIndex] == type) return false;
		landType[img.cellIndex] = type;
		img.src = landList[type][0];
		img.title = "(" + img.cellX + ", " + img.cellY + ") " + landList[type][1];
		return true;
	}

	base.addEventListener("mousedown", onMouseDown);
	base.addEventListener("mouseover", onMouseOver);
	base.addEventListener("mouseup", onMouseUpOrLeave);
	base.addEventListener("mouseleave", onMouseUpOrLeave);

	function updateStats() {
		var count = [];
		landType.forEach(x=>count[x] = count[x]?count[x]+1:1);
		stats.innerText = landList.map((x,i)=>x[1] + "\t" + (count[i] || 0)).filter((x,i)=>count[i]).join("\n");
	}

	function read_textarea(e) {
		var data = document.getElementById("textarea").value.split(" ");
		data.forEach((x, i)=>draw(imgs[i], parseInt(x)));
		updateStats();
	}
	document.getElementById("read").addEventListener("click", read_textarea);
	function write_textarea(e) {
		document.getElementById("textarea").value = landType.join(" ");
	}
	document.getElementById("write").addEventListener("click", write_textarea);
})();
