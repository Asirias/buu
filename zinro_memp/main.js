function chack_functions(source) {
	var propNames = new Array();
	var o = source;
	while (o) {
		propNames = propNames.concat(Object.getOwnPropertyNames(o));
		o = Object.getPrototypeOf(o);
	}
	console.log(propNames);
}
var addmembid = new Array();
window.onload = function()
{
	$('#addc').change(function() {
		var val = parseInt($('#addc').val(), 10);
		if (val) {
			for (var i = 0; i < val; i++) {
				var addid = 'char' + i;
				let c = "<input type='text' id =" + addid + "><select class=" + addid + " onChange='nameadd()'><option value='0'>0人</option><option value='1'>1人</option><option value='2'>2人</option><option value='3'>3人</option><option value='4'>4人</option></select><br>";
				addmembid.push(addid);
				$('#chars').append(c);
			}
		}
	});
	/*$(".lined").on('keydown', function(event) {
	   const RETURN_KEY_CODE = 13;
	   if (event.which == RETURN_KEY_CODE) {
	   // your code here ...
	   	localStorage.removeItem("foo");
	localStorage.setItem("foo","bar");
	localStorage.getItem("foo");
	localStorage.clear();
	 }
	});*/
	$('#logg').css('color', '#f00');
	nameadd();
};

function shuffle(array) {
	var n = array.length,
		t, i;
	while (n) {
		i = Math.floor(Math.random() * n--);
		t = array[n];
		array[n] = array[i];
		array[i] = t;
	}
}
var playersName = new Array();
var ur_res = new Array();

var $selec_tag = '';

function nameadd() {
	var memb_t_list = ['アンナ', 'エマ', 'エリック', 'サンドラ', 'ショーン', 'スーザン', 'トーマス', 'ヒュー', 'フェイ', 'フランク', 'マイク', 'ミカ', 'メアリー', 'メリル', 'リリアン', 'ロディ', 'ローラ', 'ゲイル', 'ジェイ', 'ジェシカ', 'バニラ', 'ビル'];

	var sum_pep = 0;
	var citizen = parseInt($('#citizen').val(), 10);
	if (citizen > 0) sum_pep += citizen;
	var pwolf = parseInt($('#pwolf').val(), 10);
	if (pwolf > 0) sum_pep += pwolf;
	var madman = parseInt($('#madman').val(), 10);
	if (madman > 0) sum_pep += madman;
	var fanatic = parseInt($('#fanatic').val(), 10);
	if (fanatic > 0) sum_pep += fanatic;
	var fox = parseInt($('#fox').val(), 10);
	if (fox > 0) sum_pep += fox;
	var fortune_teller = parseInt($('#fortune_teller').val(), 10);
	if (fortune_teller > 0) sum_pep += fortune_teller;
	var spiritual_ability = parseInt($('#spiritual_ability').val(), 10);
	if (spiritual_ability > 0) sum_pep += spiritual_ability;
	var hunter = parseInt($('#hunter').val(), 10);
	if (hunter > 0) sum_pep += hunter;
	var share = parseInt($('#share').val(), 10);
	if (share > 0) sum_pep += share;
	var cat = parseInt($('#cat').val(), 10);
	if (cat > 0) sum_pep += cat;
	var bakery = parseInt($('#bakery').val(), 10);
	if (bakery > 0) sum_pep += bakery;
	if (addmembid) {
		for (var i = 0; i < addmembid.length; i++) {
			var v = parseInt($('.' + addmembid[i]).val(), 10);
			if (v) {
				sum_pep += v;
			}
		}
	}

	playersName.length = 0;
	$('#name').empty();
	var addid = 'players';
	
	var ca = 0;
	for (var i = 0; i < sum_pep; i++) {
		
		var men = memb_t_list[i] ? memb_t_list[i] : "";
		$('#name').append("<input type='text' value=" + men + " class =" + addid + " ><br>");
		if (men != "") {
			playersName.push(men);
			ur_res.push('');
		}
		var fcnum = 0;
		$('#name .' + addid).focusout(function(e) {
			$(this).css('background-color', '#fff');
		}).focusin(function(e) {
			$(this).css('background-color', '#ffc');
			$selec_tag = $(this);
			fcnum = $('#name .' + addid).index(this)+1;
			if(fcnum >= sum_pep)fcnum=0;
			$('#playername').html($selec_tag.val());
		});
	}
	$('.blo .namelist').click(function() {
		if($selec_tag){
			$selec_tag.val($(this).val());
			var $names = $('#name').find('.'+addid);
			var t = new Array();
			var ok = true;
			$('#logg').html('');
			$names.each(function(){
			var val = $(this).val();
			if (t.indexOf(val) < 0) {
				t.push(val);
			}else{
				$('#logg').html('名前に被りが存在');
				ok = false;
				return;
			}
		});
		t = null;
		if(ok)$names.eq(fcnum).focus();
		}
	});
}
var yakusyoku_id = 'jgr';
var confirm_yakusyoku_id = 'confirmjgr';
var state_id = 'sta';
var suspicion_id = 'susp';
var yaku_list = new Array();
var colorid = 'getcolor';
function tadd() {
	for (var o = 0; o < playersName.length; o++) {
		var tr_id = playersName[o];
		var ls = "<input type='text' class ='nl' value="+ tr_id+">";

		var list = '<tr id=' + tr_id + '>';

		var position = "<select id=" + yakusyoku_id + ">";
		for (var i = 0; i < yaku_list.length; i++) position += "<option>" + yaku_list[i] + "</option>";
		position += "</select>";
		var tem_confirm = "<select id=" + confirm_yakusyoku_id + ">";
		tem_confirm += "<option>未</option>";
		for (var i = 0; i < yaku_list.length; i++) tem_confirm += "<option>" + yaku_list[i] + "</option>";
		tem_confirm += "</select>";
		var state = "<select id=" + state_id + ">" + "<option>生存</option>" + "<option>吊死</option>" + "<option>志望吊死</option>" + "<option>噛死</option>" + "<option>道連れ死</option>" + "<option>謎死</option>" + "</select>";

		var color = "<div id=" + colorid + "></div>";
		
		list += '<th class="name">' + ls + '</th>';
		list += '<th class="position">' + position + '</th>';
		list += '<th class="pos"></th>';
		list += '<th class="color">'+color+'</th>';
		
		list += '<th class="tem_confirm">' + tem_confirm + '</th>';
		list += '<th class="state">' + state + '</th>';

		list += '<th class="memo"><textarea></textarea></th>';
		list += '</tr>';
		$('#table').append(list);
		$('#'+tr_id).css('background-color', '#aaa');
	}
}
var day = 0;
function invertRgb(str_old_rgb) {
    var ary_rgb = str_old_rgb.match(/([0-9]+)/g);
    for (var i = 0; i < ary_rgb.length; i++) {
        ary_rgb[i] = 255 - ary_rgb[i];
    }
    return 'RGB(' + ary_rgb.join(',') + ')';
}
function changecolor()
{
	//文字色を反転させる。
    var old_color = $('body').css('color');
    var new_color = invertRgb(old_color);
    $('body').css('color', new_color);
 
    //背景色を反転させる。
    old_color = $('body').css('background-color');
    new_color = invertRgb(old_color);
    $('body').css('background-color', new_color);
}
function dayaf() {
	$('#content').html(++day + "日目");
		var count = 0;
		$("#table .color").each(function(){
			var hm = $(this).find('#'+colorid).html();
			if('#' + hm != '#'){
			ur_res[count] = hm;
			}
			count++;
		});
		$("#table .pos").each(function(){
			if($(this).html()){
				var $resval =$(this).find('.res').val('');
				var $colval =$(this).find('.col').val('白');
			}
		});
}
function Gray()	{
	var glis = '';
	for (var o = 0; o < playersName.length; o++) {
		var name = playersName[o];
		var $tr = $('#'+ name);
		var state = $tr.find('.state #'+state_id).val();
		var trval = $tr.find('.position #'+yakusyoku_id).val();
		var hm = $tr.find('.color #'+colorid).html();
		if('#' + hm != '#'){
			var li = hm.split(':');
			for(var c = 0;c < li.length-1; c++){
			var re = li[c].split('&gt;');
			if(re[1] != "白<br>")glis += "<div class='black'>"+name+':'+state+'</div>';
			}
		}else if(trval == '市民')($selec_tag.val() == name) 
			? glis += "<div class = 'me'>"+name+':'+state+'</div>' : glis += "<div class = 'nomal'>"+name+':'+state+'</div>';
	}
	$('#gray').html(glis);
}
function start() {
	if ($selec_tag == '') {
		$('#logg').html('プレイヤー(あなた)は誰ですか?名前にフォーカスを当ててクリックで決定です。');
		return;
	}
	var count = 0;
	$(".players").each(function(){
		if($selec_tag.val() == $(this).val())count++;
	});
	if(count != 1){
		$('#logg').html('プレイヤー(あなた)の名前がおかしい,又複数存在');
		return;
	}
	$('#logg').html('');
	
	if ($('.sten').val() == '開始') {
		yaku_list.length = 0;
		var citizen = parseInt($('#citizen').val(), 10);
		if (citizen <= 0) {
			alert("市民が0ですよ");
		} else yaku_list.push('市民');
		var pwolf = parseInt($('#pwolf').val(), 10);
		if (pwolf <= 0) {
			alert("人狼は入れてください");
			return;
		} else yaku_list.push('人狼');
		var madman = parseInt($('#madman').val(), 10);
		if (madman > 0) yaku_list.push('狂人');
		var fanatic = parseInt($('#fanatic').val(), 10);
		if (fanatic > 0) yaku_list.push('狂信者');
		var fox = parseInt($('#fox').val(), 10);
		if (fox > 0) yaku_list.push('妖狐');
		var fortune_teller = parseInt($('#fortune_teller').val(), 10);
		if (fortune_teller > 0) yaku_list.push('占い師');
		var spiritual_ability = parseInt($('#spiritual_ability').val(), 10);
		if (spiritual_ability > 0) yaku_list.push('霊能');
		if (fortune_teller == 0 && spiritual_ability == 0) {
			alert("占い師か霊媒は入れてください");
			return;
		}
		var hunter = parseInt($('#hunter').val(), 10);
		if (hunter > 0) yaku_list.push('狩人');
		var share = parseInt($('#share').val(), 10);
		if (share % 2 != 0) {
			alert("共有が奇数なのはおかしいです");
			return;
		} else if (share > 0) yaku_list.push('共有');
		var cat = parseInt($('#cat').val(), 10);
		if (cat > 0) yaku_list.push('猫又');
		var bakery = parseInt($('#bakery').val(), 10);
		if (bakery > 0) yaku_list.push('パン屋');
		if (addmembid) {
			for (var i = 0; i < addmembid.length; i++) {
				var addmem = parseInt($('.' + addmembid[i]).val(), 10);
				if (addmem > 0) yaku_list.push($('#' + addmembid[i]).val());
			}
			addmembid = null;
		}
		count = 0;
		$(".players").each(function(){
			playersName[count] = $(this).val();
			count++;
		});
		$("#remem").html('残り:'+count);
	
		day = 1;
		$('#content').html(day + "日目");
		tadd();
		$('#table .tem_confirm').change(function() {
				var ss = $(this).find("#" + confirm_yakusyoku_id).val();
				var color = '#aaa';
				switch (ss) {
					case '市民':
						color = '#eee';
						break;
					case '人狼':
						color = '#222';
						break;
					case '狂人':
						color = '#444';
						break;
					case '狂信者':
						color = '#333';
						break;
					case '妖狐':
						color = '#ff0';
						break;
					case '占い師':
						color = '#0f0';
						break;
					case '霊能':
						color = '#0ff';
						break;
					case '狩人':
						color = '#fff';
						break;
					case '共有':
						color = '#f00ff0';
						break;
					case '猫又':
						color = '#00f0ff';
						break;
					case 'パン屋':
						color = '#f00';
						break;
					default:
						break;
				}
				$(this).css('background-color', color);
		});
			$('#table .state').change(function() {
				var state = $(this).find('#'+state_id).val();
				var col = '';
				if(state != '生存')col = '#333';
				else col = '#FFF';
				
				$(this).parent().find('.name').css('background-color', col);
				
				if($('#' + $selec_tag.val()).find('.state #' +state_id).val() == '生存'){
				count = 0;
				$('#' + $selec_tag.val()).find('.name').css('background-color', '#f00');
				
				$("#table .state").each(function(){
				if($(this).find('#'+state_id).val() == '生存')count++;
				});
				$("#remem").html('残り:'+count);
				}
			});
			$('#table .position').change(function() {
				var d =$(this).find('#'+yakusyoku_id).val();
				var $parid = $(this).parent().find('.pos');
				if(d == "占い師" || d == "霊能"){

				var tem = day + "<select class='res'>";
				tem += "<option></option>";
				for (var i = 0; i < playersName.length; i++) 
				tem += "<option>" + playersName[i] + "</option>";
				tem += "</select>";
				tem += "<select class='col'>";
				tem += "<option selected>白</option>";
				tem += "<option>黒</option>";
				tem += "</select>";
				$parid.html(tem);
				
				}else $parid.empty();
			});
			$('#table .pos').change(function() {
				var res = "";
				
				for (var o = 0; o < playersName.length; o++) {
					$('#' + playersName[o] + " .color").find('#'+colorid).html(ur_res[o]);
				}
				$("#table .pos").each(function(){
				if($(this).html()){
				var $par = $(this).parent();
				var $name = $par.find('.name .nl').val();
				
				var $st = $par.find('.state #'+state_id).val();
				if($st == '生存'){		
				var $resval =$(this).find('.res').val();
				var $colval =$(this).find('.col').val();
				res = $name+">"+$colval+"<br>:";
				
				
				if('#' + $resval != '#')
				$('#' + $resval + " .color").find('#'+colorid).append(res);
				}
				}
			});
		});
			
		$('.sten').val('終了');
		$('#' + $selec_tag.val() + ' .name').css('background-color', '#f00');
	} else {
		$('.sten').val('開始');
		$('#table').empty();
		var list = '<tr><th colspan="7" id="content">list</th></tr><tr><th>名前</th><th>CO役職</th><th>占い,霊媒結果</th><th>受けた判定</th><th>仮確定役職</th><th>状態</th><th>メモ</th></tr>';
		$('#table').append(list);
	}
}