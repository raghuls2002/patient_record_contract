\documentclass[12pt]{article}
\usepackage{hyperref}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{listings}
\usepackage{xcolor}

\lstset{
  basicstyle=\ttfamily\small,
  keywordstyle=\color{blue},
  commentstyle=\color{gray},
  stringstyle=\color{green!70!black},
  breaklines=true,
  frame=single
}

\title{\textbf{patientDatabase Smart Contract}\\
\large Secure On-Chain Storage for Remote Patient Monitoring}
\author{Ethereum Solidity Contract v0.8.25}
\date{}

\begin{document}
\maketitle

\section*{Overview}
\texttt{patientDatabase} is a secure Ethereum smart contract designed for remote health monitoring systems.  
It enables authorized medical professionals to store and manage patient vital signs on the blockchain.

This contract is part of a multi-layer IoT and blockchain-based system integrating:
\begin{itemize}[noitemsep]
    \item IoT sensors (MAX30100, DS18B20, GSR)
    \item Arduino + NodeMCU for data transmission
    \item React.js frontend dashboard
    \item Ethereum blockchain storage
    \item Apache Cassandra (for performance comparison)
\end{itemize}

\section*{Features}
\begin{itemize}[noitemsep]
    \item \textbf{Role Restricted Access:} Only the assigned doctor can add, update, or fetch data.
    \item \textbf{Add Vital Signs:} Supports single and batch uploads.
    \item \textbf{Update Records:} Modify existing entries using an index ID.
    \item \textbf{Fetch Data:} Retrieve a specific range or all entries.
    \item \textbf{Ownership Transfer:} Change the doctor/manager address securely.
\end{itemize}

\section*{VitalSigns Structure}
\begin{lstlisting}[language=C]
struct VitalSigns {
    uint timestamp;
    uint heartRate;
    uint spO2;
    uint temperature;
    uint gsrValue;
}
\end{lstlisting}

Each record stores:
\begin{itemize}[noitemsep]
    \item Unix timestamp  
    \item Heart rate (BPM)
    \item SpO2 oxygen saturation (\%)
    \item Temperature
    \item GSR skin conductance value
\end{itemize}

\section*{Key Functions}

\subsection*{1. Add a Single Entry}
\begin{lstlisting}[language=C]
function add(uint t, uint hr, uint spO2, uint temp, uint gsr)
    public restricted
\end{lstlisting}

\subsection*{2. Add Multiple Entries}
\begin{lstlisting}[language=C]
function addAll(uint[] memory t, uint[] memory hr, ...) 
    public restricted
\end{lstlisting}

\subsection*{3. Update an Entry}
\begin{lstlisting}[language=C]
function update(uint id, uint t, uint hr, uint spO2, uint temp, uint gsr)
\end{lstlisting}

\subsection*{4. Fetch Range}
\begin{lstlisting}[language=C]
function fetch(uint start, uint end)
    public view returns(...)
\end{lstlisting}

\subsection*{5. Fetch All}
\begin{lstlisting}[language=C]
function fetchAll() public view returns (...)
\end{lstlisting}

\subsection*{6. Transfer Doctor Access}
\begin{lstlisting}[language=C]
function changeDoctor(address newDoctorAddress)
\end{lstlisting}

\section*{Security}
\begin{itemize}[noitemsep]
    \item Only authorized doctor can modify blockchain data.
    \item All entries stored immutably unless explicitly updated.
    \item Protected using Solidity \texttt{modifier restricted}.
    \item MIT Licensed contract.
\end{itemize}

\section*{Tech Stack}
\begin{tabular}{|l|l|}
\hline
\textbf{Layer} & \textbf{Technology} \\ \hline
Smart Contract & Solidity 0.8.25 \\ \hline
Frontend & React.js, Web3.js \\ \hline
Blockchain & Ethereum + MetaMask \\ \hline
IoT Devices & Arduino, NodeMCU \\ \hline
Sensors & MAX30100, DS18B20, GSR \\ \hline
Cloud & ThingSpeak IoT Platform \\ \hline
\end{tabular}

\section*{Deployment}
\textbf{Using Remix IDE}
\begin{enumerate}[noitemsep]
    \item Open Remix: \url{https://remix.ethereum.org}
    \item Paste the contract into a new file.
    \item Compile using Solidity v0.8.25.
    \item Deploy using Injected Provider (MetaMask).
\end{enumerate}

\textbf{Using Hardhat/Truffle}
\begin{enumerate}[noitemsep]
    \item Place contract in \texttt{contracts/}
    \item Run deployment scripts via CLI.
\end{enumerate}

\section*{Recommended GitHub Repository Names}
\subsection*{Frontend (React)}
\begin{itemize}[noitemsep]
    \item \texttt{remote-patient-monitoring-frontend}
    \item \texttt{rpm-react-dashboard}
\end{itemize}

\subsection*{Smart Contract}
\begin{itemize}[noitemsep]
    \item \texttt{patient-monitoring-smart-contract}
    \item \texttt{rpm-ethereum-contract}
\end{itemize}

\section*{License}
This project is licensed under the \textbf{MIT License}.

\section*{Contributors}
\begin{itemize}[noitemsep]
    \item Raghul S
    \item Navaneeth Narayanan
    \item Isaac Shaju Varghese
\end{itemize}

\end{document}
