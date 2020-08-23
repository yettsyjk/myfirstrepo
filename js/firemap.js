
(()=>{
    const sfid = readQueryParam('sf_id') || readQueryParam('SF_ID');
    if(sfid && readCookie('esri_gdpr') === 'true'){
	    document.cookie = `sf_id=${sfid};path=/;expires'';domain=.esri.com`;
	    [
	    	`https://doc.arcgis.com/cookie-setter.html?sf_id=${sfid}`,
		    `https://webapps-cdn.esri.com/CDN/components/Cookie/cookie-setter.html?sf_id=${sfid}`,
		    `https://www.gisday.com/cookie-setter.html?sf_id=${sfid}`,
		    //`https://wiki.gis.com/wiki/cookie-setter.html?sf_id=${sfid}`,
		    `https://go.pardot.com/l/82202/2018-05-24/kxp8rm?sf_id=${sfid}`,
		    `https://www.esri-ireland.ie/cookie-setter?sf_id=${sfid}`
	    ].forEach((cookieSetter)=>{
		    const iframe = document.createElement('iframe');
		    iframe.setAttribute('src', cookieSetter);
		    iframe.style.display = "none";
		    document.body.appendChild(iframe);
	    });
    }
	function readQueryParam(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);

		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function readCookie(name) {
		const nameEQ = name + "=";
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
})();
