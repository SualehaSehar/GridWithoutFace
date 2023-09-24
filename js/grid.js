export class Grid {
  constructor(row, col, sc, xpos = 0, ypos = 0) {
    this.gridX = row;
    this.gridY = col;
    this.scene = sc;
    this.vertices = [];
    this.drawGrid(xpos, ypos);
  }

  drawGrid(px, py) {
    var v1 = 0;
    var v2 = 0;

    var k = 0;
    var l = 0;
    for (var x = 0; x < this.gridX; x++) {
      for (var y = 0; y < this.gridY; y++) {
        var p = this.drawUnit(v1, v2);
        this.scene.add(p);
        p.position.set(px, py, 0);

        v1 = this.vertices[k][3].x;
        v2 = this.vertices[k][3].y;
        k++;
      }

      v1 = this.vertices[l][1].x;
      v2 = this.vertices[l][1].y;
      l += this.gridY; // one row contains gridY boxes
      // incrementing l to shift the row
    }
  }

  drawUnit(x, y) {
    var w = 1;
    var h = 1;

    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(x, y, 0));
    geometry.vertices.push(new THREE.Vector3(x, y - h, 0));
    geometry.vertices.push(new THREE.Vector3(x + w, y - h, 0));
    geometry.vertices.push(new THREE.Vector3(x + w, y, 0));
    geometry.vertices.push(new THREE.Vector3(x, y, 0));
    var material = new THREE.LineBasicMaterial({ color: "red" });
    var polygon = new THREE.Line(geometry, material);

    this.vertices.push(geometry.vertices);
    return polygon;
  }
}
