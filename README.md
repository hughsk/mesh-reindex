# mesh-reindex [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Convert a flat array into a simplicial-complex-style indexed mesh, without
optimisation.

Useful for interoperability with other modules, and can also be used in
combination with [unindex-mesh](http://github.com/hughsk/unindex-mesh)
to force hard edges.

## Usage

[![NPM](https://nodei.co/npm/mesh-reindex.png)](https://nodei.co/npm/mesh-reindex/)

### mesh = reindex(array)

Given a flat array of vertices, expand into an indexed mesh with the following
properties:

* `positions`: the vertices in the mesh.
* `cells`: the faces in the mesh, with each element being an array of three
  indices for each point in a triangle.

## See Also

* [unindex-mesh](http://github.com/hughsk/unindex-mesh/)
* [simplicial-complex](http://github.com/mikolalysenko/simplicial-complex/)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/mesh-reindex/blob/master/LICENSE.md) for details.
