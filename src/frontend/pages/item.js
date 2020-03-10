window.handleItemRequest = () => {
  document.body.innerHTML = `
        <header>
          <ul>
            <a href="/" data-navigo>Home</a>
            <a href="list" data-navigo>List</a>
            <a href="picture" data-navigo>Picture</a>
          </ul>
        </header>

        <h1>Info for item</h1>
      `

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks()
}
