"use strict"
lol adding this


console.log("Whatever");
/**
alid ref name: FETCH_HEAD
07:39:11.900 [codebrag-akka.actor.default-dispatcher-4] ERROR c.s.c.s.commits.CommitImportService - Cannot pull changes from upstream
org.eclipse.jgit.api.errors.JGitInternalException: Invalid ref name: FETCH_HEAD
	at org.eclipse.jgit.api.ResetCommand.call(ResetCommand.java:160) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.GitRepository.pullChangesForRepo(GitRepository.scala:34) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.Repository$class.pullChanges(Repository.scala:18) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.GitRepository.pullChanges(GitRepository.scala:15) ~[codebrag.jar:2.3.3]
ooo


	at akka.dispatch.Mailbox.processMailbox(Mailbox.scala:230) [codebrag.jar:2.3.3]
	at akka.dispatch.Mailbox.run(Mailbox.scala:212) [codebrag.jar:2.3.3]
	at akka.dispatch.ForkJoinExecutorConfigurator$MailboxExecutionTask.exec(AbstractDispatcher.scala:506) [codebrag.jar:2.3.3]
	at scala.concurrent.forkjoin.ForkJoinTask.doExec(ForkJoinTask.java:260) [codebrag.jar:2.3.3]
	at scala.concurrent.forkjoin.ForkJoinPool$WorkQueue.runTask(ForkJoinPool.java:1339) [codebrag.jar:2.3.3]
	at scala.concurrent.forkjoin.ForkJoinPool.runWorker(ForkJoinPool.java:1979) [codebrag.jar:2.3.3]
	at scala.concurrent.forkjoin.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:107) [codebrag.jar:2.3.3]
09:58:25.610 [codebrag-akka.actor.default-dispatcher-11] ERROR c.s.c.repository.GitRepository - Cannot pull changes for repo /home/ubuntu/codebrag-2.3.3/repos/poc because of: Invalid ref name: FETCH_HEAD
09:58:25.611 [codebrag-akka.actor.default-dispatcher-11] ERROR c.s.c.s.commits.CommitImportService - Cannot pull changes from upstream
org.eclipse.jgit.api.errors.JGitInternalException: Invalid ref name: FETCH_HEAD
	at org.eclipse.jgit.api.ResetCommand.call(ResetCommand.java:160) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.repository.GitRepository.pullChangesForRepo(GitRepository.scala:34) ~[codebrag.jar:2.3.3]


	at com.softwaremill.codebrag.service.commits.CommitImportService.importRepoCommits(CommitImportService.scala:22) ~[codebrag.jar:2.3.3]
	at com.softwaremill.codebrag.service.updater.RepoUpdateActor$$anonfun$receive$1.applyOrEls
**/
