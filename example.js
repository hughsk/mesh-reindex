var shell   = require('mesh-viewer')()
var unindex = require('unindex-mesh')
var bunny   = require('bunny')
var reindex = require('./')
var mesh

shell.camera.distance = 30
shell.on('viewer-init', function() {
  mesh = shell.createMesh(reindex(unindex(bunny)))
})

shell.on('gl-render', function() {
  mesh.draw()
})
