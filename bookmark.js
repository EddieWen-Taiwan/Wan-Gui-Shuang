javascript:(function(){

	document.getElementsByName('entry.954463140')[0].value = '我的名字是';
	document.getElementsByName('entry.709241587')[0].value = '我的電話是';

	document.getElementsByName('entry.1858865286')[0].value = "因私人緊急事項 (看病、就醫、因要事而返家)致延誤返回";
	document.getElementsByName('entry.1858865286')[0].disabled = false;
	document.getElementsByName('entry.1200038893')[0].value = "21:30";
	document.getElementsByName('entry.560005917')[0].value = "本人於此聲明所言屬實，並備相關文件供日後查證";
	document.getElementsByName('entry.560005917')[0].disabled = false;

	alert(`晚歸填寫成功！\n\n${document.getElementsByName('entry.954463140')[0].value} / ${document.getElementsByName('entry.709241587')[0].value}`);

	document.getElementsByTagName('form')[0].submit();

}());
