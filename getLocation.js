my.getLocation({
    success(res) {
      my.hideLoading();
      console.log(res)
      that.setData({
        hasLocation: true,
        location: formatLocation(res.longitude, res.latitude)
      })
    },
    fail() {
      my.hideLoading();
      my.alert({ title: 'location failed' });
    },
  })