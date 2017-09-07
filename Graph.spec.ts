/**
 * Test cases for Graph Implementation
 * @author Chester Carmer
 * @version 0.0.0
 */

import { Vertex, Edge, Graph } from './Graph';
import { expect } from 'chai';

describe("Graph", () => {

    const graph = new Graph();
    const vertices = [0, 1, 2];
    
    const edges: number[][] = [
        [0, 1, 1],
        [1, 2, 2],
        [2, 0, 3],
    ];
    vertices.forEach( v => graph.addVertex(v) );
    edges.forEach( e => (<any>graph.addEdge)(...e) );

    it('should have the correct number of vertices', () => {
        expect(graph.getVerticies().length).to.equal(3);
    });

    it("should have vertices with the correct number of edges", () => {
        expect(graph.getVertex(0).edges.length).to.deep.equal(2);
    });

    it("should edges with the correct length", () => {
        expect(
            graph
                .getVertex(0)
                .edges
                .find(e => e.terminal === graph.getVertex(2))
                .distance
        ).to.equal(3);
    });
    
});