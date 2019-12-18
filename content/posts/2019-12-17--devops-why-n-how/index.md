---
title: DevOps十年了，你準備好要變了嗎？
subTitle: DevOps Why & How
cover: devops_satya_nadella-cover.jpg
category: devops
---

# 何謂DevOps?

DevOps 有太多的定義比如：<a href="https://zh.wikipedia.org/wiki/DevOps" target="_blank">Wikipedia</a>, <a href="https://cloud.google.com/devops/" target="_blank">Google Cloud</a>，這些都表達得很好，但我更喜歡從開發（CI/CD）的角度來講這件事，比如：

> Continuous Delivery is the ability to get changes of all types ... into production, or into the hands of users, 
> safely and quickly in a sustainable way. ... We achieve all this by ensuring our code is always in a deployable state ... thus completely eliminate the integration, testing and 
> hardening phases ... as well as code freezes. ~ [Continuous Delivery](https://continuousdelivery.com/)

要完成這樣的轉變(digital transformation), 當中包含了不同類別的各項技能之養成<a href="https://cloud.google.com/devops/#devops-capabilities" target="_blank">DevOps capabilities</a>，但是在這之前，最難的還是要讓團隊了解及接受改變的必要...

# 為何改變是必需的？

好了，的確有另一些方法可以讓（軟體）開發更快、品質更好、更穩定等等。但我們現也做得不錯，也是能夠固定時間交付客戶所需要的功能，那我還需要改變嗎？？ 這邊就提到了持續改善的重要性，拿Uber[1]來說，它的商業模式並沒有太多改變，但其架構每兩年就大改一次，這改變不外乎是為了架構能容易擴展（scale out）及<mark>當團隊快速增長時還能維持一樣的開發效率</mark>。企業的起起落落，尤其是IT產業，當改變是被迫時，往往競爭者已攻城掠地，這時改變是壓力很大的，相反的，隨時都能持續改善，反而可以享受著指標數字隨著做為改變而不斷改進的成就感，兩者相差甚巨！

當初IBM及微軟內部第一次在推動DevOps改造時(2014)就是發生在協作軟件的部門（Lotus Notes and MS Office）, 也正是Google的Gmail[2]等快速地被企業及個人採用後，兩家公司發現當他們還在以每季度在更新軟件時，Google卻是每天都能更版甚至使用A/B Testing的方法在快速反應使用者的回饋。 結果是MS Office轉型後且上了雲端似乎帶來更好的結果，但IBM卻退出了企業協作軟件的市場...。

從十年前的第一場DevOpsDays, Belgium, 2009，到傳統軟體公司想改變時已經是將近五年後的事，但在DevOps滿十年後的今天，你，想要變了嗎？當共享軟体當道，商業模式容易被複製，只要灑錢暫時也能雇用到不錯的工程師，所以長遠來看，企業的差異性與競爭力大概就只剩下企業文化與效率。

## 企業文化：

> Culture eats strategy for breakfast. ~ Peter Drucker

## 效率：

再深再廣的護城河，只要別人的效率是你的兩倍、五倍甚至十倍，那麼護城河也很快就會有被填滿的一天...。
是的，就像DevOps Handbooks所提，『改善日常工作甚至比進行日常工作更重要』，而且要及早做，而非放到最後，層層堆疊，想改也改不動。
<mark>方法就是用3% ~ 5% 的開發人力或是至少20%的時間週期用於持續改善的活動</mark>。
![Make the change while you can](./devops_satya_nadella.png)

總結一下，對於競爭優勢就如同Dave West[3]所提及的：
> Peter Senge 在其著作《The Fifth Discipline - The Art & Practice Of The Learning 
> Organization》中描述了組織專注於學習的必要性。
> 「唯一可持續的競爭優勢是一個組織比競爭者更快速地學習的能力」。
> 最終，通過專注於敏捷領導力、自組織、以客戶結果為中心、消除浪費以及瞭解組織文化並頻繁交付這 5 項挑戰，
> 組織將變得更加專注於學習並變得更加敏捷。

# 如何開始？

實踐方法除了Agile的mindset, Scrum process或是DevOps Handbooks中提到的三步工法等，<mark>但我更想用技術方面的實做來闡述所需相關的能力</mark>。這些數位化的改革中，工作模式改變最大的就非QA莫屬了，所以從如何"align QA jobs to DevOps" 的角度來看，其實更能看出開發團隊要在何處施力才更能達到DevOps的境界。

那為何說QA的工作方式有最大的改變呢？ 因為在非Continuous Delivery 的交付模式中，一定會有幾天的code freeze，這段時間就是拿來讓QA做整合測試的時間，也唯有QA sign off的交付才能被佈署至生產線。
想想如果要做到每天一次或多次生產線的交付，那麼生產的流水線當中，其實已經沒有QA能手動測式的空檔了... 所以這些QA的角色可能會消失，但有關質量的工作事項卻只會更多且散落在各個開發的週期中（詳見『測試在DevOps中的樣子』章節），也正是所謂的測試左移或右移。

再接下去的幾個章節中，會對這些實踐做更多的闡述或實作方法（很多方法其實跟你想的不一樣），包括有：
- 測試在DevOps中的樣子
- 持續集成（Continuous Integration）
- 測試左移
  - 實例化需求（Specification by Examples）
  - 單主幹開發（Trunk-based Development & Feature Toggles）
  - 測試自動化（Test Automation）
      - API 測試？ 想想Consumer Driven Contract Testing
      - 想更快？ 先做好Test Isolation
      - 自動化測試戰略與工具（Strategy & Tools）

- 測試右移
  - Low Risk Deployment
  - Testing in Production
  - Application Observability (O11y)

待續，持續更新中 ...

# Reference

1. Stack History: [A Timeline of Uber's Tech Stack Evolution](https://stackshare.io/stack-history-timeline-uber-tech-stack-evolution)
2. Developing Gmail’s New Look — [Google Blog](https://medium.com/@thysniu/feature-flags-release-small-and-often-simplify-workflow-19d92fe0c2a5)
3. Dave West. [Managing next century agile.](https://www.infoq.cn/article/managing-next-century-agile/)
4. [IBM selling Lotus Notes/Domino business to HCL] (https://techcrunch.com/2018/12/07/ibm-selling-lotus-notes-domino-business-to-hcl-for-1-8b/)