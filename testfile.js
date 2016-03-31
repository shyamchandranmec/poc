"use strict"

console.log("Whatever");
/**
alid ref name: FETCH_HEAD
07:39:11.900 [codebrag-akka.actor.default-dispatcher-4] ERROR c.s.c.s.commits.CommitImportService - Cannot pull changes from upstream
org.eclipse.jgit.api.errors.JGitInternalException: Invalid ref name: FETCH_HEAD
	at org.eclipse.jgit.api.ResetCommand.call(ResetCommand.java:160) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.GitRepository.pullChangesForRepo(GitRepository.scala:34) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.Repository$class.pullChanges(Repository.scala:18) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.GitRepository.pullChanges(GitRepository.scala:15) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.service.commits.CommitImportService.importRepoCommits(CommitImportService.scala:22) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.service.updater.RepoUpdateActor$$anonfun$receive$1.applyOrEls
**/
