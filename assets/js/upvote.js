/**
 * AzFree Upvote System
 * localStorage-based, no backend required.
 * Each browser gets a unique UUID stored in localStorage.
 */

const VOTES_KEY = 'azfree_votes_v1';

function getStoredVotes() {
    try {
        return JSON.parse(localStorage.getItem(VOTES_KEY) || '{}');
    } catch {
        return {};
    }
}

function saveVotes(votes) {
    localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
}

function hasVoted(resourceId) {
    return !!getStoredVotes()[resourceId];
}

function toggleVote(resourceId, currentCount) {
    const votes = getStoredVotes();
    if (votes[resourceId]) {
        delete votes[resourceId];
        saveVotes(votes);
        return { count: Math.max(0, currentCount - 1), voted: false };
    } else {
        votes[resourceId] = true;
        saveVotes(votes);
        return { count: currentCount + 1, voted: true };
    }
}

function initUpvoteButtons() {
    document.querySelectorAll('.upvote-btn').forEach(btn => {
        const id = btn.dataset.id;
        if (!id) return;
        const countEl = btn.querySelector('.upvote-count');

        // Restore voted state visually
        if (hasVoted(id)) {
            btn.classList.add('voted');
            btn.querySelector('.upvote-arrow')?.classList.add('text-primary');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const current = parseInt(countEl?.textContent || '0', 10);
            const result = toggleVote(id, current);

            if (countEl) countEl.textContent = result.count;

            if (result.voted) {
                btn.classList.add('voted');
                btn.querySelector('.upvote-arrow')?.classList.add('text-primary');
                // Bounce animation
                btn.classList.add('scale-125');
                setTimeout(() => btn.classList.remove('scale-125'), 200);
            } else {
                btn.classList.remove('voted');
                btn.querySelector('.upvote-arrow')?.classList.remove('text-primary');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initUpvoteButtons);
