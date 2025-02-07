import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { TextField, Paper, List, ListItem, ListItemText, Box } from "@mui/material";

const highlightMatch = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ fontWeight: "bold", color: "#1976d2" }}>{part}</span>
        ) : (
            part
        )
    );
};

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const isSelecting = useRef(false); // Track selection state

    useEffect(() => {
        if (query.length >= 3 && !isSelecting.current) {
            const fetchResults = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/students?search=${query}`,{
                        headers : {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": process.env.DEPLOYMENT_API_URL,
                        }
                    });
                    setResults(response.data.result);
                    setShowDropdown(true);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            const debounce = setTimeout(fetchResults, 300);
            return () => clearTimeout(debounce);
        } else if (!isSelecting.current) {
            setResults([]);
            setShowDropdown(false);
        }
    }, [query]);

    const handleSelect = (student) => {
        isSelecting.current = true; // Prevent triggering API call
        setSelectedStudent(student);
        setQuery(student.name);
        setShowDropdown(false);

        setTimeout(() => {
            isSelecting.current = false; // Allow API calls after selection
        }, 300);
    };

    return (
        <Box sx={{ width: 300, margin: "50px auto", position: "relative" }}>
            <TextField
                fullWidth
                label="Search for a student..."
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {showDropdown && results.length > 0 && (
                <Paper sx={{ position: "absolute", width: "100%", zIndex: 10 }}>
                    <List>
                        {results.map((student) => (
                            <ListItem button key={student.rollNumber} onClick={() => handleSelect(student)}>
                                <ListItemText primary={highlightMatch(`${student.name} (${student.rollNumber})`, query)} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
            {selectedStudent && (
                <Paper sx={{ marginTop: 10, padding: 2, border: "1px solid #ccc" }}>
                    <h3>{selectedStudent.name}</h3>
                    <p>Class: {selectedStudent.class}</p>
                    <p>Roll Number: {selectedStudent.rollNumber}</p>
                </Paper>
            )}
        </Box>
    );
};

export default SearchBar;
