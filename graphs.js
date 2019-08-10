
/* Graph - nodes with connections
    
    social networking
    location/mapping
    file system optimization

    vertex - a node
    edge - the connections between nodes

    weighted graph - assign a value/values to each edges

    directional graph - instagram: follow users, one way direction.

    undirectional graph - facebook, add friends, two way connections

*/

/* Adjecency Matrix - presents with 2d array with nodes placed as column and row
[0][0] edge could have 0 or 1 or true false.

    takes up more space
    slower to iterate all edges

    faster to look up specific edges

*/

/* Adjecency List - use hash table to present the nodes and connections
nodes are keys, and values can be array of values.

    takes up less space
    faster to iterate all edges

    can be slower to look up specific edges

    more popular in general

*/

class Graph{

    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

      removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

     removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}
