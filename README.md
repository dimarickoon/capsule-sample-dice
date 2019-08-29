<p align="Center">
  <img src="https://bixbydevelopers.com/dev/docs-assets/resources/dev-guide/bixby_logo_github-11221940070278028369.png">
  <br/>
  <h1 align="Center">Bixby Quick Start Dice Sample Capsule</h1>
</p>

## Overview

This capsule provides companion code to the Bixby [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start). The capsule simulates throwing dice. Throw any number of dice and choose how many sides the dice have. The capsule demonstrates use of [Concepts](https://bixbydevelopers.com/dev/docs/dev-guide/developers/modeling.modeling-concepts) and [Actions](https://bixbydevelopers.com/dev/docs/dev-guide/developers/modeling.modeling-actions).

**Note:** This capsule is meant to be used with the [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start), which teaches you how to add training. Therefore, you cannot use natural language initially. However, you can use the following intent in the Simulator to test the capsule out-of-the-box:

```
// Give two values (number of dice and number of sides) with the
// goal of rolling dice
intent {
  goal: example.dice.RollResultConcept
  value: example.dice.NumSidesConcept (6)
  value: example.dice.NumDiceConcept (2)
}
```

---

## Additional Resources

### Your Source for Everything Bixby
* [Bixby Developer Center](http://bixbydevelopers.com) - Everything you need to get started with Bixby Development!

### Guides & Best Practices
* [Quick Start Guide](https://bixbydevelopers.com/dev/docs/get-started/quick-start) - Build your first capsule
* [Design Guides](https://bixbydevelopers.com/dev/docs/dev-guide/design-guides) - Best practices for designing your capsules
* [Developer Guides](https://bixbydevelopers.com/dev/docs/dev-guide/developers) - Guides that take you from design and modeling all the way through deployment of your capsules

### Video Guides
* [Introduction to Bixby](https://youtu.be/DFvpK4PosvI) - Bixby and the New Exponential Frontier of Intelligent Assistants
* [Bixby Fundamentals](https://bixby.developer.samsung.com/newsroom/en-us/22/01/2019/Teaching-Bixby-Fundamentals-What-You-Need-to-Know) - Bixby Fundamentals: What You Need to Know

### Need Support?
* Have a feature request? Please suggest it in our [Support Community](https://support.bixbydevelopers.com/hc/en-us/community/topics/360000183273-Feature-Requests) to help us prioritize.
* Have a technical question? Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/bixby) with tag “bixby”


