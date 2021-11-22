
  function emaildanielle(){
    Swal.fire(
        'Contact Danielle?',
        'Call me Via 0700559991'
      )
  }
  function emailjaspeer(){
    Swal.fire(
        'Contact Jaspeer?',
        'Call me Via 0733910298 '
      )
  }
  function buyitem(){
    Swal.fire({
      title: 'Buy Item?',
      text: "Do you want to Purchase this Item",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Purchase it!',
      cancelButtonText:'Take me back'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Thank you!',
          'Contact Danielle 0700559991 \n to place an Order',
          'success'
        )
      }
    })
  }