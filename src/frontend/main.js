var root = document.location.origin;
var router = new Navigo(root);

// when no route specified it assumes the base route: "/"
router.on(window.handleHomeRequest).resolve();
router.on("/list", window.handleListRequest).resolve();
router.on("/list/:id", window.handleItemRequest).resolve();
router.on("/picture", window.handlePictureRequest).resolve();
