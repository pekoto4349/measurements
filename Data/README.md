In this section we provide the Data we exctracted from the whole experiment for each orchestration mode. We recommend those .csv files to be opened
through Jmeter Tool in order to have a holistic view of every measurement.

In each .csv file as it is (without utilizing jmeter for insight)  we can observe, from left to right column:
the time frame each request took place, 
the total time for each request to complete, 
the request's name (as it was named in the Jmeter tool), 
the HTTP response code, 
the Thread Group number (which there is always 1-1 since we only used single user requests), 
the status of each request (whether there was a success or not), 
the size of the message in bytes 
the 3 flags which consist of the Sample Count, the Execution Correctness and the Error Count. 

The names of these .csv files are a referance to which mode of orchestration of our experiment we used for measurement in each file. 
OW refers to 1st mode where Sequence Operator is the orchestrator for OpenWhisk runtime functions, 
NR refers to 2nd mode where Function Sequence is in Node-RED executed as a Docker Action in OpenWhisk,
and OW-NR refers to the hybrid mode we used where Orchestration is inside Node-RED that invokes functions deployed 
on OpenWhisk environment.
The 100,200,1000 in the names of each data file refer to the innate delay of each function in the function sequence  we used with 
the Artificial Delay Function we created (in ms). Consequently the OW-OW-100 in the name of a file means that those data where extracted from a case
of the 1st mode of orchestration (ow-ow) with innate delay of functions of 100ms.

Finally, in some files you can observe in their names the words _summary , _tree , _aggrrepp, _intree, etc. As mentioned before the csv files are able to
be opened on Jmeter, so each of this files derived from a specific tab of the results in the Jmeter Tool, the Summary, the Aggregate Report etc. 

Screenshots are provided in this directory for a better visual aid
