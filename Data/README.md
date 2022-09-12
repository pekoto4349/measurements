
# Data Files

In this section we provide the Data we exctracted from the whole experiment for each orchestration mode. 
We recommend those .csv files to be opened through Jmeter Tool in order to have a holistic view of every measurement.

### Modes of Execution of the Experiment 
The name of each .csv file are a reference to which mode of orchestration of our experiment we used for measurement.

- **OW** refers to 1st mode where Sequence Operator is the orchestrator for OpenWhisk runtime functions, 
- **NR** refers to 2nd mode where Function Sequence is in Node-RED executed as a Docker Action in OpenWhisk, 
and 
- **OW-NR** refers to the hybrid mode we used where Orchestration is inside Node-RED that invokes functions deployed on OpenWhisk environment. 
 
 The 100, 200, 1000 in the names of each data file refer to the innate delay of each function in the function 
 sequence we used with the Artificial Delay Function we created (in ms). You can find the Javascript code of this function [here](https://github.com/pekoto4349/measurements/tree/main/Delay%20Function%20Implementation). 
 Consequently the OW-OW-100 in the name of a file means 
that those data where extracted from a case of the 1st mode of orchestration (ow-ow) with innate delay of functions of 100ms.

Finally, in some files we can observe file endings with _summary , _tree , _aggrrepp, _intree, etc. 
As mentioned before the csv files are able to be opened on Jmeter, so each of this files derived from a specific tab of the 
results in the Jmeter Tool, the Summary, the Aggregate Report etc. More info on Jmeter and Jmx files will be provided on [Jmeter Files branch](https://github.com/pekoto4349/measurements/tree/main/Jmeter%20files)

# 
The names of .csv files are a reference to which mode of orchestration of our experiment we used for measurement 
. In each .csv files as it is (without utilizing jmeter for insight) we can observe, from left to right column:

1) the time frame each request took place
2) the total time for each request to complete
3) the request's name (as it was named in the Jmeter tool)
4) the HTTP response code, 
5) the Thread Group number (which there is always 1-1 since we only used single user requests)
6) the status of each request (whether there was a success or not)
7) the size of the message in bytes 
8) the 3 flags which consist of the Sample Count, the Execution Correctness and the Error Count. 
## Table Screenshots

In the following Screenshots you can observe analytically some data elements we provided through the .csv files

### Aggregate Report 

![alt text](https://github.com/pekoto4349/measurements/blob/main/Data/Aggregate%20Report%20Example%20100ms.png?raw=true)

### Summary Report 

![alt text](https://github.com/pekoto4349/measurements/blob/main/Data/Summary%20Report%20Example%20100ms.png?raw=true)

### Response Time Graph 

![alt text](https://github.com/pekoto4349/measurements/blob/main/Data/Jmeter%20Example%20Graph%20Extracted%20from%20Data%20and%20csv.png?raw=true)

