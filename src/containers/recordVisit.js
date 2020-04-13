const recordVisit = (page) => {
    fetch('https://geoip-db.com/json/geoip.php')
        .then(res => { return res.json(); })
        .then(res => {
            console.log(res)
            console.log(window.location.host)
            const body = {
                country: res.country_name,
                countryCode: res.country_code,
                region: res.state,
                //regionName: res.regionName,
                city: res.city,
                zip: res.postal,
                //timezone: res.timezone,
                //isp: res.isp,
                page: page,
                browser: window.navigator.userAgent,
                time: Date(Date.now()).toLocaleString().substring(0, 24),
                ref: document.referrer ? document.referrer.split("://")[1] : ""
            }
            const q = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                method: 'POST',
                body: JSON.stringify(body)
            }
            const url = `https://${window.location.host}/api/visits`
            // const url = `http://${window.location.hostname}:9000/visits` // local
            fetch(url, q)
                .then(res => res.json())
                .then(console.log)
                .catch(console.error)




        })
}

export default recordVisit;