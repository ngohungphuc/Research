## Components of an Rx stream

- Producers
- Consumers
- Data pipeline
- Time

### PRODUCERS

Producers are the sources of your data. A stream must always have a producer of data,
which will be the starting point for any logic that you’ll perform in RxJS. In practice, a
producer is created from something that generates events independently (anything
from a single value, an array, mouse clicks, to a stream of bytes read from a file). The
observer pattern defines producers as the subject; in RxJS, we call them observables, as in
something that’s able to be observed.
Observables are in charge of pushing notifications, so we refer to this behavior as
fire-and-forget, which means that we’ll never expect the producer to be involved in
the processing of events, only the emission of them.

### CONSUMERS

To balance the producer half of the equation, you must also have a consumer to
accept events from the producer and process them in some specific way. When the
consumer begins listening to the producer for events to consume, you now have a
stream, and it’s at this point that the stream begins to push events; we’ll refer to a consumer
as an observer.
Streams travel only from the producer to the consumer, not the other way around.

<img src="./img/AcroRd32_2018-10-07_07-52-47.png">

With respect to RxJS, a stream will always flow from an upstream observable to a downstream
observer, and both components are loosely coupled, which increases the modularity
of your application,

### DATA PIPELINE

One advantage of RxJS is that you can manipulate or edit the data as it passes from the
producer to the consumer. This is where the list of methods (known as observable
operators) comes into play. Manipulating data en route means that you can adapt the
output of the producer to match the expectations of the consumer. Doing so promotes
a separation of concerns6 between the two entities, and it’s a big win for the modularity
of your code.

### TIME
The implicit factor behind all of this is time. For everything RxJS there’s always an
underlying concept of time, which you can use to manipulate streams.