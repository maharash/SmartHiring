const STORAGE_KEY = "candidates";

export const saveCandidate = (candidate) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  stored.push(candidate);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

export const getAllCandidates = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const deleteCandidate = (index) => {
  const stored = getAllCandidates();
  stored.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

export const updateCandidate = (index, updatedCandidate) => {
  const stored = getAllCandidates();
  stored[index] = updatedCandidate;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

export const filterCandidates = (criteriaFn) => {
  const stored = getAllCandidates();
  return stored.filter(criteriaFn);
};
