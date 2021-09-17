const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/search-month', function (req, res) {

  let searchMonth = req.session.data['search-date-month']

  if (searchMonth === '01') {
    res.redirect('management-information/january-2021')
  }

  else if (searchMonth === '02') {
    res.redirect('management-information/february-2021')
  }

  else if (searchMonth === '03') {
    res.redirect('management-information/march-2021')
  }

  else if (searchMonth === '04') {
    res.redirect('management-information/april-2021')
  }

  else if (searchMonth === '05') {
    res.redirect('management-information/may-2021')
  }

  else if (searchMonth === '06') {
    res.redirect('management-information/june-2021')
  }

  else if (searchMonth === '07') {
    res.redirect('management-information/july-2021')
  }

  else if (searchMonth === '08') {
      res.redirect('management-information/august-2021')
  }


  else if (searchMonth === '09') {
    res.redirect('management-information/september-2021')
  }

})

module.exports = router
