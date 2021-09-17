const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/management-information/search-month', function (req, res) {

  let searchMonth = req.session.data['search-date-month']

  if (searchMonth === '01') {
    res.redirect('january-2021')
  }

  else if (searchMonth === '02') {
    res.redirect('february-2021')
  }

  else if (searchMonth === '03') {
    res.redirect('march-2021')
  }

  else if (searchMonth === '04') {
    res.redirect('april-2021')
  }

  else if (searchMonth === '05') {
    res.redirect('may-2021')
  }

  else if (searchMonth === '06') {
    res.redirect('june-2021')
  }

  else if (searchMonth === '07') {
    res.redirect('july-2021')
  }

  else if (searchMonth === '08') {
      res.redirect('august-2021')
  }


  else if (searchMonth === '09') {
    res.redirect('september-2021')
  }

})

module.exports = router
