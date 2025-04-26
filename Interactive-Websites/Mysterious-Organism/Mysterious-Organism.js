//Wide-scope parameters
const dnaBases = ['A', 'T', 'C', 'G']

// Returns a random DNA base
const returnRandBase = () => {
    return dnaBases[Math.floor(Math.random() * 4)] 
}
// Returns a random DNA base different from the input base
const returnDifBase = (base) => {
  const difBases = dnaBases.filter(i => {
    return !(i === base)
  })
  return difBases[Math.floor(Math.random() * 3)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Returns percentage similarity of two strings (moved outside of method to give wider scope)

const calcSimilarity = (a,b) => {
  let simCount = 0;
  for (let i = 0; i < 15; i++) {
    if (a[i] === b[i]) {
    simCount++;
    }
  }
  const similarity = Math.round(simCount/15 * 10000)/100
  return similarity
}

// Factory function to create pAequor, allows specific DNA but defaults to create a random strand
const pAequorFactory = (number, arrDNA = mockUpStrand()) => {
  return {
    _specimenNum: number,
    _dna: arrDNA,
    // Method to randomly pick a dna base and change it
    mutate() {
      const baseIndex = Math.floor(Math.random() * 15);
      const newBase = returnDifBase(this._dna[baseIndex]);
      this._dna[baseIndex] = newBase
    },
    // Method to compare DNA to the DNA of another pAqequor
    compareDNA(otherPAequor) {
      const percSimilar = calcSimilarity(this._dna,otherPAequor._dna)
      const message = `Speciment #${this._specimenNum} and specimen #${otherPAequor._specimenNum} have ${percSimilar}% DNA in common.`
      return message
    },
    // Method to determine survivability (related to having at least 60% 'G' or 'C' bases)
    willLikelySurvive() {
      const survivalBases = this._dna.filter(i => {
        return (i === 'C' || i === 'G')
      })
      return (survivalBases.length/15 > 0.6) 
    },
    // Method to create a complementary DNA strand (swaps A <=> T and C <=> G)
    complementStrand() {
      const compArr = []
      for (i = 0; i < this._dna.length; i++) {
        switch(this._dna[i]) {
          case 'A':
            compArr.push('T')
            break
          case 'C':
            compArr.push('G')
            break
          case 'G':
            compArr.push('C')
            break
          case 'T':
            compArr.push('A')
            break
        }
      }
      return compArr
    }
  }
}

// Creates array of pAqequor data
const createPAqequorArray = (n) => {
  const pAequorArr = []
  for (let i=1; i <= n; i++) {
    pAequorArr.push(pAequorFactory(i))
  }
  return pAequorArr
}

// Creates an array of 30 simulated pAqequor as requested
const pAequorArray1 = createPAqequorArray(30)

// Finds the two simulated pAqequor that have the most similar DNA
const mostSimilar = (pAequorArr) => {
  let maxSimilarity = 0
  let mostSimilarPair = [null, null]
    for (i = 0; i < pAequorArr.length - 1; i++) {
      for (j = i + 1; j < pAequorArr.length; j++) {
        let similarity = calcSimilarity(pAequorArr[i]._dna,pAequorArr[j]._dna)
        if (similarity > maxSimilarity) {
          maxSimilarity = similarity;
          mostSimilarPair[0] = pAequorArr[i]._specimenNum
          mostSimilarPair[1] = pAequorArr[j]._specimenNum
        }
      }
    }
    const message = `Specimen #${mostSimilarPair[0]} and specimen #${mostSimilarPair[1]} have the highest level of similaity within the group. There DNA is ${maxSimilarity}% similar.`
    return message
  }


// Test cases

/*
const samp1 = pAequorFactory(1)
const samp2 = pAequorFactory(2)
console.log(samp1._dna.join(''))
console.log(samp2._dna.join('')) 
console.log(samp1.complementStrand().join(''))
console.log(samp1.compareDNA(samp2)) //Should print comparison message
console.log(samp1.willLikelySurvive()) //Should print boolean
console.log(createPAqequorArray(3))
console.log(mostSimilar(pAequorArray1))
*/
