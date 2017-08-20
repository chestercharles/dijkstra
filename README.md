# Dijkstra's Algorithm
A Typescript implementation of Dijkstra's Algorithm and a Graph data structure.

### Run the Tests

1) Install dependancies with `npm install`.
2) Run the tests with `npm test`.

### Pseudocode
```
function Dijkstra(Graph, source):

    create vertex set Q

    for each vertex v in Graph:             // Initialization
        dist[v] ← INFINITY                  // Unknown distance from source to v
        prev[v] ← UNDEFINED                 // Previous node in optimal path from source
        add v to Q                          // All nodes initially in Q (unvisited nodes)

    dist[source] ← 0                        // Distance from source to source
    
    while Q is not empty:
        u ← vertex in Q with min dist[u]    // Node with the least distance will be selected first
        remove u from Q 
        
        for each neighbor v of u:           // where v is still in Q.
            alt ← dist[u] + length(u, v)
            if alt < dist[v]:               // A shorter path to v has been found
                dist[v] ← alt 
                prev[v] ← u 

    return dist[], prev[]
```