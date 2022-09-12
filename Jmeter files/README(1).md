
# Jmeter Setup & Jmx Files

This section explains the Jmeter tool's environment in case the .jmx files are needed to be used.

The following screenshots from the test plan of the Jmeter can provide some insight on the structure
of our test plan and the set-up of our experiment.

### Http Request 

In the first image provided, aside from the structure of the test plan on far left we can see the body of the Request that we created and looped in order to 
get our measurements. Through that we can observe the following:

    1) Server Name and Port Number are the server and the port we used for the OpenWhisk interaction

    2) Request name was parametrized with a variable, so that its clear which request is being completed at any time

    3) The path is the path we got from the web action we used with the wsk action get NAME --url command on OpenWhisk

    4) Parameters that are "local" for the request, which are called Request Parameters. With those we implemented the delay
    and the number of functions in each sequence. 


## Experiment Setup & Structure 
### OW-OW mode

As for the Structure of our Test Plan we created a Single Threaded Group with the requests being looped for 40 times on Loop Controller for Sample Size
on each sequence number varying from 1-50. Sample counter has range from 0-39 to count the sample size, Loop Controller for Sample Size Loops for 40 times, 
Request Group Counter is a simple counter from 1-10 in order to be sure which request is handled at any given time, Sequence Counter has a range from 0-50 
in order to measure all the range of sequences with a step of 5 from 1 to 50 and finally Loop Controller for total diff Requests is itterating 11 times
in order to handle the 10 groups of different requests (1-11).
In the second image we can observe some starting values of global variables we used for the whole experiment.

### NR-NR Mode

In third and fourth images, we used almost the same structure and we iteratted our requests in the same way as we did before with 
one major difference. In the Loop 1-10 of groups of different requests we iterrated the 1st group of 40 samples in a different loop from the rest, in order 
to make our experiment continuous and avoid the problem of having number of iterrations 1,5,10,15...etc (1 to 5 increases by 4 though the rest increase by
5). In the fifth image we created our user defined variables where this time myseq variable (number of functions executed on each request) is passed on 
as a request parameter ad not on the path as the 1st mode.

### OW-NR Mode

In the 3rd (hybrid) mode OW_NR the structure and use of test plan was almost identical as 2nd mode NR-NR.

### Some additional info 
* Constant timer bellow requests was utilized in order to avoid errors on OpenWhisk for too many requests
* Grey Names of test elements are disabled thus are not used on the experiment even though they exist on the structure

## Images from the Jmeter Environment

## OW-OW

### Http Request 
![alt text](https://github.com/pekoto4349/measurements/blob/main/Jmeter%20files/owowsettings1.png?raw=true) 

### User Defined Variables

![alt text](https://github.com/pekoto4349/measurements/blob/main/Jmeter%20files/owowsettings2.png?raw=true) 

## NR-NR 

### Http Request on 1st itteration

![alt text](https://github.com/pekoto4349/measurements/blob/main/Jmeter%20files/nrnrsettings1.png?raw=true) 

### Http Request Looping

![alt text](https://github.com/pekoto4349/measurements/blob/main/Jmeter%20files/nrnrsettings2.png?raw=true) 

### User Defined Variables

![alt text](https://github.com/pekoto4349/measurements/blob/main/Jmeter%20files/nrnrsettings3.png?raw=true) 

