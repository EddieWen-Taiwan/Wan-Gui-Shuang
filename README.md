## 晚歸爽

填了半年多的晚歸單，直到剛剛，「幹...為什麼每次都填一樣的單子，打一樣字....」

於是乎，就有一個瀏覽器書籤，可以自動幫你填完個人資料，送出表單。不過你還是得先打開晚歸單的網頁啦QQ。

請把第二行第三行後面的 `我的名字/電話是` 換成你的名字/電話

~~~javascript
javascript:
document.getElementsByName('entry.954463140')[0].value = '我的名字是';
document.getElementsByName('entry.709241587')[0].value = '我的電話是';
document.getElementsByName('entry.1858865286')[0].value = "因私人緊急事項 (看病、就醫、因要事而返家)致延誤返回";
document.getElementsByName('entry.1858865286')[0].disabled = false;
document.getElementsByName('entry.1200038893')[0].value = "21:30";
document.getElementsByName('entry.560005917')[0].value = "本人於此聲明所言屬實，並備相關文件供日後查證";
document.getElementsByName('entry.560005917')[0].disabled = false;
alert(`晚歸填寫成功！\n\n${document.getElementsByName('entry.954463140')[0].value} / ${document.getElementsByName('entry.709241587')[0].value}`);
document.getElementsByTagName('form')[0].submit();
~~~

然後打開瀏覽器，新增書籤。名字就隨便吧，然後網址的地方就貼上這一串blablabla就行了。
